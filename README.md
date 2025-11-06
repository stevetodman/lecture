# 🎧 Guess the Murmur

**An elegant cardiac auscultation training app for medical learners.**

> Don't just test recall—teach the ear.
> Link **S1/S2 timing** → **systolic/diastolic** → **envelope** → **maneuver response**

---

## 🌟 The Vision

Master cardiac murmur identification in ≤5 seconds by:
- Seeing the **phonocardiogram** with S1/S2 markers
- Hearing the **actual murmur**
- Understanding **why this, not that**

Built following the **Ultrathink Manifesto**: crafted, not coded.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 📚 The 10 Canonical Cases

Each case is clinically validated and teaches key discriminators:

1. **Aortic Stenosis (AS)** - Crescendo-decrescendo at RUSB
2. **Ventricular Septal Defect (VSD)** - Harsh holosystolic at LLSB
3. **Mitral Regurgitation (MR)** - Holosystolic at apex → axilla
4. **Tricuspid Regurgitation (TR)** - Holosystolic + inspiration ↑ (Carvallo)
5. **Patent Ductus Arteriosus (PDA)** - Continuous "machinery"
6. **Aortic Regurgitation (AR)** - Early diastolic decrescendo
7. **Mitral Stenosis (MS)** - Mid-diastolic rumble + opening snap
8. **Still's Murmur** - Innocent vibratory, softer standing
9. **Hypertrophic Cardiomyopathy (HCM)** - Dynamic (↑ Valsalva, ↓ squat)
10. **Innocent Pulmonary Flow** - Soft midsystolic at LUSB

---

## 🎯 Features

### Core Experience
- ✅ **Waveform visualization** with S1/S2 timing
- ✅ **Audio playback** (spacebar to play/pause)
- ✅ **5-choice NBME-style** questions (keyboard 1-5)
- ✅ **Rich feedback** with "why this, not that" differentials
- ✅ **Precordial site map** that lights up on reveal
- ✅ **Maneuver effects** table (standing, squat, inspiration)

### Learning Analytics
- 🔥 **Streak tracking**
- 🎯 **Accuracy percentage**
- 📊 **Per-lesion statistics**
- 📥 **CSV export** for debriefs

### Accessibility
- ⌨️ **Keyboard navigation**: Space (play/pause), 1-5 (choices), Enter (reveal/next)
- 🎨 **Clear visual states**: idle → playing → answered → revealed
- 📱 **Responsive design**: works on desktop and tablet

---

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main quiz interface
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── WaveformPane.tsx    # Phonocardiogram with S1/S2 markers
│   ├── AudioControls.tsx   # Play/pause with spacebar
│   ├── ChoiceList.tsx      # 5 choices with keyboard support
│   ├── RevealPanel.tsx     # Teaching feedback
│   ├── SiteMap.tsx         # Precordial map
│   └── ProgressBar.tsx     # Stats + CSV export
├── lib/
│   ├── types.ts            # TypeScript definitions
│   ├── schema.ts           # Zod validation
│   ├── cases.ts            # 10 canonical cases
│   └── store.ts            # Zustand state management
├── public/
│   ├── audio/              # MP3 murmur files
│   └── waveforms/          # PNG phonocardiograms
└── README.md
```

---

## 🎨 Design Principles

1. **Think Different** - Question every assumption
2. **Obsess Over Details** - Every pixel, every transition matters
3. **Craft, Don't Code** - Implementation as performance art
4. **Simplify Ruthlessly** - Nothing exists unless it must

---

## 🔧 Tech Stack

- **Next.js 14** - Modern React framework
- **TypeScript** - Type safety is craft
- **Tailwind CSS** - Utility-first styling
- **Zustand** - Lightweight state management
- **Zod** - Runtime validation

---

## 📝 Adding New Cases

To add a new murmur case, edit `lib/cases.ts`:

```typescript
{
  id: "new_case_01",
  media: {
    audio_url: "/audio/new_case_01.mp3",
    image_url: "/waveforms/new_case_01.png",
  },
  choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4", "Choice 5"],
  answer: "Choice 1",
  explain: {
    correct: "Why this diagnosis is correct...",
    differentials: [
      "Why not choice 2...",
      "Why not choice 3...",
      "Why not choice 4...",
      "Why not choice 5...",
    ],
  },
  tags: ["systolic", "ejection"],
  maneuver_effects: {
    standing: "↑",
    squat: "↓",
  },
  meta: {
    difficulty: "core",
    site_hint: "RUSB",
  },
}
```

---

## 🎓 Clinical Sources

All cases validated against:
- **UCSF Hospitalist Handbook** (valvular disease, maneuvers)
- **Stanford Medicine 25** (AR, MS, diastolic murmurs)
- **NCBI StatPearls** (MR, HCM, physiology)
- **Merck Manuals** (VSD, pediatric cases)
- **American Academy of Family Physicians** (innocent murmurs)

---

## 🚢 Ship It Tomorrow

Use this as a **5-minute warm-up** at morning conference:
1. Run through 5-10 cases as a team
2. Export CSV of misses
3. Drive targeted mini-talk on common errors

---

## 📄 License

Built with ❤️ for medical education.
Open source - use it, fork it, teach with it.

---

## 🙏 Acknowledgments

Inspired by the **Ultrathink Manifesto**:
> "Don't just write code. Make a dent in the universe."

This isn't an app. It's a teaching moment, wrapped in software.
