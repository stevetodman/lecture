/**
 * The 10 Canonical Cardiac Murmurs
 * Each case is clinically validated and pedagogically optimized
 * Sources: UCSF Hospitalist Handbook, Stanford Medicine 25, NCBI StatPearls
 */

import { MurmurCase } from "./types";

export const CANONICAL_CASES: MurmurCase[] = [
  {
    id: "as_01",
    media: {
      audio_url: "/audio/as_01.mp3",
      image_url: "/waveforms/as_01.png",
    },
    choices: [
      "Aortic stenosis",
      "Aortic regurgitation",
      "Mitral regurgitation",
      "VSD",
      "Still's murmur",
    ],
    answer: "Aortic stenosis",
    explain: {
      correct:
        "Systolic ejection murmur, crescendo-decrescendo at RUSB with radiation to carotids. Classic for severe AS.",
      differentials: [
        "Aortic regurgitation: early diastolic decrescendo at LSB, not systolic",
        "Mitral regurgitation: holosystolic at apex radiating to axilla, different site",
        "VSD: harsh holosystolic at LLSB, no carotid radiation",
        "Still's: innocent vibratory murmur, softer and more musical",
      ],
    },
    tags: ["systolic", "ejection", "crescendo-decrescendo", "RUSB"],
    maneuver_effects: {
      standing: "↓",
      squat: "↑",
    },
    meta: {
      difficulty: "core",
      site_hint: "RUSB",
    },
  },
  {
    id: "vsd_01",
    media: {
      audio_url: "/audio/vsd_01.mp3",
      image_url: "/waveforms/vsd_01.png",
    },
    choices: [
      "VSD",
      "Tricuspid regurgitation",
      "Mitral regurgitation",
      "PDA",
      "Aortic stenosis",
    ],
    answer: "VSD",
    explain: {
      correct:
        "Harsh holosystolic murmur at LLSB. Remember: smaller defects produce louder murmurs.",
      differentials: [
        "Tricuspid regurgitation: also holosystolic at LLSB but increases with inspiration (Carvallo sign)",
        "Mitral regurgitation: holosystolic but at apex, radiates to axilla",
        "PDA: continuous machinery murmur spanning S1-S2, not just systolic",
        "Aortic stenosis: crescendo-decrescendo ejection murmur at RUSB, not holosystolic",
      ],
    },
    tags: ["holosystolic", "harsh", "LLSB"],
    maneuver_effects: {
      inspiration: "↔",
    },
    meta: {
      difficulty: "core",
      site_hint: "LLSB",
    },
  },
  {
    id: "mr_01",
    media: {
      audio_url: "/audio/mr_01.mp3",
      image_url: "/waveforms/mr_01.png",
    },
    choices: [
      "Mitral regurgitation",
      "Tricuspid regurgitation",
      "VSD",
      "Aortic stenosis",
      "Mitral stenosis",
    ],
    answer: "Mitral regurgitation",
    explain: {
      correct:
        "Holosystolic murmur at apex radiating to axilla. Classic MR radiation pattern.",
      differentials: [
        "Tricuspid regurgitation: holosystolic at LLSB (not apex), increases with inspiration",
        "VSD: harsh holosystolic at LLSB, no axillary radiation",
        "Aortic stenosis: systolic ejection at RUSB, crescendo-decrescendo pattern",
        "Mitral stenosis: diastolic rumble, not systolic",
      ],
    },
    tags: ["holosystolic", "apex", "axillary radiation"],
    maneuver_effects: {
      standing: "↔",
      squat: "↑",
    },
    meta: {
      difficulty: "core",
      site_hint: "Apex",
    },
  },
  {
    id: "tr_01",
    media: {
      audio_url: "/audio/tr_01.mp3",
      image_url: "/waveforms/tr_01.png",
    },
    choices: [
      "Tricuspid regurgitation",
      "VSD",
      "Mitral regurgitation",
      "Aortic regurgitation",
      "Still's murmur",
    ],
    answer: "Tricuspid regurgitation",
    explain: {
      correct:
        "Holosystolic at LLSB that increases with inspiration (Carvallo sign). Hallmark of TR.",
      differentials: [
        "VSD: also holosystolic at LLSB but does NOT increase with inspiration",
        "Mitral regurgitation: holosystolic but at apex, not LLSB",
        "Aortic regurgitation: early diastolic, not systolic",
        "Still's: innocent vibratory midsystolic, musical quality",
      ],
    },
    tags: ["holosystolic", "LLSB", "inspiration-sensitive", "Carvallo"],
    maneuver_effects: {
      inspiration: "↑",
    },
    meta: {
      difficulty: "core",
      site_hint: "LLSB",
    },
  },
  {
    id: "pda_01",
    media: {
      audio_url: "/audio/pda_01.mp3",
      image_url: "/waveforms/pda_01.png",
    },
    choices: [
      "PDA",
      "Aortic stenosis",
      "Mitral regurgitation",
      "VSD",
      "Still's murmur",
    ],
    answer: "PDA",
    explain: {
      correct:
        "Continuous 'machinery' murmur maximal left infraclavicular, intensity rising into/just after S2.",
      differentials: [
        "Aortic stenosis: systolic ejection only at RUSB, no diastolic component",
        "Mitral regurgitation: holosystolic at apex, no diastolic tail",
        "VSD: harsh holosystolic at LLSB, ends at S2",
        "Still's: innocent vibratory midsystolic, much softer",
      ],
    },
    tags: ["continuous", "machinery", "systole+diastole", "infraclavicular"],
    maneuver_effects: {
      standing: "↔",
      squat: "↔",
    },
    meta: {
      difficulty: "core",
      site_hint: "L infraclavicular",
    },
  },
  {
    id: "ar_01",
    media: {
      audio_url: "/audio/ar_01.mp3",
      image_url: "/waveforms/ar_01.png",
    },
    choices: [
      "Aortic regurgitation",
      "Mitral stenosis",
      "Aortic stenosis",
      "Tricuspid regurgitation",
      "PDA",
    ],
    answer: "Aortic regurgitation",
    explain: {
      correct:
        "Early diastolic, decrescendo, blowing murmur at left sternal border. Classic AR.",
      differentials: [
        "Mitral stenosis: mid-diastolic rumble at apex with opening snap, not early diastolic",
        "Aortic stenosis: systolic ejection at RUSB, not diastolic",
        "Tricuspid regurgitation: holosystolic, not diastolic",
        "PDA: continuous murmur spanning systole and diastole, not just early diastolic",
      ],
    },
    tags: ["diastolic", "early-diastolic", "decrescendo", "blowing", "LSB"],
    maneuver_effects: {
      squat: "↑",
    },
    meta: {
      difficulty: "core",
      site_hint: "LLSB",
    },
  },
  {
    id: "ms_01",
    media: {
      audio_url: "/audio/ms_01.mp3",
      image_url: "/waveforms/ms_01.png",
    },
    choices: [
      "Mitral stenosis",
      "Aortic regurgitation",
      "Tricuspid regurgitation",
      "Still's murmur",
      "Aortic stenosis",
    ],
    answer: "Mitral stenosis",
    explain: {
      correct:
        "Low-pitched mid-diastolic rumble at apex with opening snap. Best heard with bell.",
      differentials: [
        "Aortic regurgitation: early diastolic decrescendo at LSB, not mid-diastolic rumble",
        "Tricuspid regurgitation: holosystolic, not diastolic",
        "Still's: innocent vibratory midsystolic, not diastolic",
        "Aortic stenosis: systolic ejection, not diastolic",
      ],
    },
    tags: ["diastolic", "mid-diastolic", "rumble", "opening-snap", "apex"],
    maneuver_effects: {
      standing: "↓",
    },
    meta: {
      difficulty: "core",
      site_hint: "Apex",
    },
  },
  {
    id: "stills_01",
    media: {
      audio_url: "/audio/stills_01.mp3",
      image_url: "/waveforms/stills_01.png",
    },
    choices: [
      "Still's murmur",
      "VSD",
      "Aortic stenosis",
      "PDA",
      "Mitral regurgitation",
    ],
    answer: "Still's murmur",
    explain: {
      correct:
        "Innocent vibratory/musical midsystolic murmur at LLSB/apex. Louder supine, softer standing.",
      differentials: [
        "VSD: harsh holosystolic (not midsystolic), much louder and pathologic",
        "Aortic stenosis: crescendo-decrescendo at RUSB with carotid radiation, not vibratory",
        "PDA: continuous machinery murmur, not just systolic",
        "Mitral regurgitation: holosystolic at apex, blowing quality not vibratory",
      ],
    },
    tags: ["innocent", "vibratory", "musical", "midsystolic", "benign"],
    maneuver_effects: {
      standing: "↓",
    },
    meta: {
      difficulty: "easy",
      site_hint: "LLSB",
    },
  },
  {
    id: "hcm_01",
    media: {
      audio_url: "/audio/hcm_01.mp3",
      image_url: "/waveforms/hcm_01.png",
    },
    choices: [
      "Hypertrophic cardiomyopathy",
      "Aortic stenosis",
      "Mitral regurgitation",
      "VSD",
      "Still's murmur",
    ],
    answer: "Hypertrophic cardiomyopathy",
    explain: {
      correct:
        "Dynamic systolic murmur that increases with Valsalva/standing, decreases with squat. Hallmark HCM maneuver response.",
      differentials: [
        "Aortic stenosis: decreases with Valsalva/standing (opposite of HCM), increases with squat",
        "Mitral regurgitation: intensity relatively unchanged by preload maneuvers",
        "VSD: fixed intensity, not dynamic with maneuvers",
        "Still's: innocent murmur, softer with standing but not the dramatic dynamic changes of HCM",
      ],
    },
    tags: ["systolic", "dynamic", "maneuver-sensitive", "HCM"],
    maneuver_effects: {
      standing: "↑",
      squat: "↓",
    },
    meta: {
      difficulty: "hard",
      site_hint: "LLSB",
    },
  },
  {
    id: "innocent_01",
    media: {
      audio_url: "/audio/innocent_01.mp3",
      image_url: "/waveforms/innocent_01.png",
    },
    choices: [
      "Innocent pulmonary flow",
      "Aortic stenosis",
      "PDA",
      "Still's murmur",
      "VSD",
    ],
    answer: "Innocent pulmonary flow",
    explain: {
      correct:
        "Soft midsystolic murmur at LUSB, no diastolic component. Classic innocent flow murmur.",
      differentials: [
        "Aortic stenosis: louder, harsher, with carotid radiation and crescendo-decrescendo pattern",
        "PDA: continuous machinery murmur with diastolic tail, not just systolic",
        "Still's: more vibratory/musical quality at LLSB, not LUSB",
        "VSD: harsh holosystolic at LLSB, much louder",
      ],
    },
    tags: ["innocent", "soft", "midsystolic", "LUSB", "benign"],
    maneuver_effects: {
      standing: "↔",
    },
    meta: {
      difficulty: "easy",
      site_hint: "LUSB",
    },
  },
];

// Helper to get a random shuffled subset
export const getRandomCases = (count: number): MurmurCase[] => {
  const shuffled = [...CANONICAL_CASES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Helper to get case by ID
export const getCaseById = (id: string): MurmurCase | undefined => {
  return CANONICAL_CASES.find((c) => c.id === id);
};
