// AOS initialization for React
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function useAOS() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);
}
