const warmUp = [
  {
    name: "Arm Circles",
    duration: "30 sec",
    cue: "Slow, controlled circles forward and backward."
  },
  {
    name: "Bodyweight Squats",
    duration: "30 sec",
    cue: "Sit into heels, keep chest proud."
  },
  {
    name: "Cat-Cow",
    duration: "30 sec",
    cue: "Move smoothly through full spine flexion/extension."
  }
];

const strengthBlocks = [
  {
    title: "Block A • Push & Core (2 min 30 sec)",
    repeat: "x2 rounds",
    details: [
      {
        name: "Dumbbell Floor Press",
        reps: "12 controlled reps",
        tempo: "2 sec down, 1 sec up",
        cue: "Keep elbows at 45°, squeeze at top."
      },
      {
        name: "Dumbbell Half-Kneeling Press",
        reps: "10 reps/side",
        tempo: "Smooth press",
        cue: "Glute of rear leg tight; ribs stacked."
      },
      {
        name: "Hollow Body Hold",
        duration: "20 sec",
        cue: "Lower back glued to floor, reach long."
      }
    ],
    transition: "15 sec to breathe + reset"
  },
  {
    title: "Block B • Legs & Back (2 min 30 sec)",
    repeat: "x2 rounds",
    details: [
      {
        name: "Romanian Deadlift",
        reps: "12 reps",
        tempo: "3 sec down, 1 sec up",
        cue: "Hinge from hips, maintain flat back."
      },
      {
        name: "Dumbbell Alternating Reverse Lunge",
        reps: "10 reps/side",
        tempo: "Controlled step-back",
        cue: "Keep front knee tracking over mid-foot."
      },
      {
        name: "Bent-Over Row",
        reps: "12 reps",
        tempo: "1 sec squeeze",
        cue: "Pause at top, shoulder blades tight."
      }
    ],
    transition: "15 sec shake-out"
  },
  {
    title: "Block C • Finisher (2 min)",
    repeat: "Continuous flow",
    details: [
      {
        name: "Dumbbell Thruster",
        reps: "12 reps",
        tempo: "Explosive up",
        cue: "Drive through heels, punch overhead."
      },
      {
        name: "Renegade Row",
        reps: "8 reps/side",
        tempo: "2 sec row",
        cue: "Hips square; slow, strict pull."
      },
      {
        name: "Suitcase Carry March",
        duration: "30 sec/side",
        cue: "March tall, ribs down, active grip."
      }
    ],
    transition: "Sip of water if needed"
  }
];

const cooldown = [
  {
    name: "Deep Squat Hold",
    duration: "45 sec",
    cue: "Use dumbbells as counterweight, breathe deeply."
  },
  {
    name: "Chest Opener",
    duration: "45 sec",
    cue: "Hold light stretch on doorway or frame."
  },
  {
    name: "Supine Twist",
    duration: "45 sec/side",
    cue: "Relax shoulders into floor."
  }
];

const weeklyRhythm = [
  {
    title: "Day A",
    focus: "Run full 15-minute protocol.",
    note: "Maintain tempos; aim for clean, crisp reps."
  },
  {
    title: "Day B",
    focus: "Same flow, swap order of Blocks B & C.",
    note: "Keeps stimulus fresh while staying familiar."
  },
  {
    title: "Optional Active Recovery",
    focus: "10 min walk + gentle mobility.",
    note: "Use on days you miss the strength session."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>15-Min Full Body Dumbbell Blueprint</h1>
          <p>
            Minimal gear, maximum intent. Use this protocol to build muscle,
            strength, and an aesthetic frame with just a pair of 5 kg PVC
            dumbbells. Stay consistent when you can—when you miss a day, pick up
            exactly where you left off.
          </p>
          <div className="stat-grid">
            <div className="stat-card">
              <span className="stat-number">15 min</span>
              <span className="stat-label">Total Session Time</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3 blocks</span>
              <span className="stat-label">Strength + Finisher</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">All levels</span>
              <span className="stat-label">Progress via tempo & reps</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Session Flow</h2>
          <div className="timing">
            <div>
              <strong>Warm-Up</strong>
              <span>3 min</span>
            </div>
            <div>
              <strong>Blocks A & B</strong>
              <span>10 min</span>
            </div>
            <div>
              <strong>Block C</strong>
              <span>2 min</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Warm-Up Ramp</h2>
          <ul className="list">
            {warmUp.map((item) => (
              <li key={item.name} className="list-item">
                <div>
                  <h3>{item.name}</h3>
                  <p className="muted">{item.cue}</p>
                </div>
                <span className="badge">{item.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Main Strength Blocks</h2>
          <div className="block-grid">
            {strengthBlocks.map((block) => (
              <article key={block.title} className="block-card">
                <header>
                  <h3>{block.title}</h3>
                  <p className="muted">{block.repeat}</p>
                </header>
                <ul className="inner-list">
                  {block.details.map((detail) => (
                    <li key={detail.name}>
                      <div className="detail-header">
                        <span className="movement">{detail.name}</span>
                        {detail.reps ? (
                          <span className="badge">{detail.reps}</span>
                        ) : (
                          <span className="badge">{detail.duration}</span>
                        )}
                      </div>
                      <p className="muted">
                        {detail.tempo && <strong>{detail.tempo} • </strong>}
                        {detail.cue}
                      </p>
                    </li>
                  ))}
                </ul>
                <footer className="muted">{block.transition}</footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Cooldown Reset</h2>
          <ul className="list">
            {cooldown.map((item) => (
              <li key={item.name} className="list-item">
                <div>
                  <h3>{item.name}</h3>
                  <p className="muted">{item.cue}</p>
                </div>
                <span className="badge">{item.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Weekly Rhythm</h2>
          <div className="weekly-grid">
            {weeklyRhythm.map((day) => (
              <article key={day.title} className="weekly-card">
                <h3>{day.title}</h3>
                <p>{day.focus}</p>
                <p className="muted">{day.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tips">
        <div className="container">
          <h2>Progression Tips</h2>
          <ul>
            <li>
              <strong>Tempo first:</strong> Maintain the prescribed tempo before
              adding reps. Slow eccentrics create tension despite light loads.
            </li>
            <li>
              <strong>Range of motion:</strong> Prioritize full depth squats,
              clean lockouts, and fully extended rows. Quality beats quantity.
            </li>
            <li>
              <strong>Consistency streaks:</strong> Two to three sessions per
              week is enough. Restart the Day A flow whenever you resume.
            </li>
            <li>
              <strong>Breathing:</strong> Inhale with control on the lowering
              phase, forcefully exhale on efforts to stabilize your trunk.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
