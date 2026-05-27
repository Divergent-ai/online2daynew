'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Volume2, VolumeX } from 'lucide-react';

const BUCKET_NAME = 'Musicfile';
const MUSIC_FILE = 'andre-rnb-mix-neww-2-64kbps-full.ogg';
const FALLBACK_SUPABASE_URL = 'https://eksfdcorokimgxzsjnst.supabase.co';
const PUBLIC_URL_KEY = 'public-storage-url-generation-only';
const MUSIC_VOLUME = 0.45;

function getMusicUrl() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || PUBLIC_URL_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });

  return supabase.storage.from(BUCKET_NAME).getPublicUrl(MUSIC_FILE).data.publicUrl;
}

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const musicUrl = useMemo(getMusicUrl, []);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      const audio = audioRef.current;

      if (audio) {
        audio.pause();
        audio.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  const getAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio(musicUrl);

      audio.crossOrigin = 'anonymous';
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = MUSIC_VOLUME;
      audioRef.current = audio;
    }

    return audioRef.current;
  };

  const handleToggle = async () => {
    if (isLoading) {
      return;
    }

    const audio = getAudio();

    if (isPlaying) {
      audio.muted = true;
      audio.pause();
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);
    audio.muted = false;
    audio.volume = MUSIC_VOLUME;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
      console.error('Music playback failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
      aria-pressed={isPlaying}
      title={isPlaying ? 'Mute music' : 'Play music'}
      onClick={handleToggle}
      className={`group fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark-900)] sm:bottom-6 sm:right-6 ${
        isPlaying
          ? 'border-[rgba(0,242,234,0.55)] bg-[linear-gradient(135deg,rgba(255,0,80,0.95),rgba(0,242,234,0.82))] text-white shadow-[0_0_28px_rgba(0,242,234,0.28),0_0_46px_rgba(255,0,80,0.22)]'
          : 'border-white/10 bg-[rgba(10,10,16,0.82)] text-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl hover:border-white/25 hover:text-white'
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(255,0,80,0.35), rgba(0,242,234,0.35))',
          filter: 'blur(14px)',
        }}
      />
      <span className="relative flex h-full w-full items-center justify-center rounded-full">
        {isPlaying ? <Volume2 size={23} strokeWidth={2.4} /> : <VolumeX size={23} strokeWidth={2.4} />}
      </span>
      {isPlaying && (
        <span
          aria-hidden="true"
          className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--neon-green)] shadow-[0_0_14px_rgba(0,255,136,0.9)]"
        />
      )}
    </button>
  );
}
