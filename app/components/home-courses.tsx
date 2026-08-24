type Course = {
  id: string;
  title: string;
  paragraphs: string[];
  highlight: string;
  icon: string;
  registrationUrl: string;
  imageUrl: string;
};

const COURSES: Course[] = [
  {
    id: "skillcourt",
    title: "Skillcourt - Bewegung, die dich weiterbringt",
    paragraphs: [
      "Schneller reagieren, besser koordinieren und deine Beweglichkeit verbessern: Skillcourt verbindet modernes Training mit Spa\u00df und abwechslungsreichen \u00dcbungen. Egal ob zur Leistungssteigerung, f\u00fcr mehr Sicherheit im Alltag oder als Erg\u00e4nzung zu deinem Training - entdecke, was in dir steckt!",
    ],
    highlight:
      "Jetzt im HolisticGym ausprobieren und neue Bewegungswelten entdecken.",
    icon: "uil-star",
    registrationUrl:
      "mailto:info@holistic-gym.de?subject=Anmeldung%20Skillcourt",
    imageUrl: "/kurse/skillcourt.jpg",
  },
  {
    id: "emp-chair",
    title: "EMP Chair - Effektives Beckenbodentraining",
    paragraphs: [
      "Beckenboden st\u00e4rken - ganz bequem und ohne gro\u00dfen Zeitaufwand. Der EMP Chair nutzt elektromagnetische Impulse, um die Beckenbodenmuskulatur intensiv zu stimulieren. Eine moderne M\u00f6glichkeit f\u00fcr alle, die ihren Beckenboden gezielt trainieren und ihre Lebensqualit\u00e4t unterst\u00fctzen m\u00f6chten.",
    ],
    highlight: "Informiere dich jetzt im HolisticGym \u00fcber den EMP Chair.",
    icon: "uil-heart",
    registrationUrl:
      "mailto:info@holistic-gym.de?subject=Anmeldung%20EMP%20Chair",
    imageUrl: "/kurse/emp-chair.jpg",
  },
  {
    id: "praeventionskurse",
    title: "Pr\u00e4ventionskurse - Gesundheit, die sich lohnt!",
    paragraphs: [
      "Mit unseren Pr\u00e4ventionskursen im HolisticGym kannst du aktiv etwas f\u00fcr deine Gesundheit tun und gleichzeitig von einer m\u00f6glichen Bezuschussung durch deine Krankenkasse profitieren.",
      "Milon unterst\u00fctzt dich dabei, deine Kraft und Fitness gezielt zu verbessern, w\u00e4hrend YARA den Fokus auf Stressabbau, Entspannung und innere Balance legt. So kannst du K\u00f6rper und Geist nachhaltig etwas Gutes tun.",
    ],
    highlight:
      "Viele Krankenkassen bezuschussen Pr\u00e4ventionskurse - informiere dich jetzt \u00fcber deine M\u00f6glichkeiten und starte im HolisticGym!",
    icon: "uil-rocket",
    registrationUrl:
      "mailto:info@holistic-gym.de?subject=Anmeldung%20Pr%C3%A4ventionskurs",
    imageUrl: "/kurse/milon.jpg",
  },
];

export function HomeCourses() {
  return (
    <div>
      {COURSES.map((course, index) => (
        <div
          key={course.id}
          style={{
            padding: "5px 0 5px",
            // marginTop: 12,
            marginBottom: 12,
            borderBottom:
              index < COURSES.length - 1
                ? "1px solid rgba(77, 85, 90, 0.25)"
                : "none",
          }}
        >
          <p style={{ marginBottom: 10 }}>{course.title}</p>
        </div>
      ))}
      <a
        className="tm-btn"
        href="https://www.holistic-gym.de/#kurse"
        target="_blank"
        rel="noopener noreferrer"
        // style={{
        //   fontSize: 14,
        //   lineHeight: "40px",
        //   padding: "0 15px",
        //   marginTop: 8,
        //   display: "inline-block",
        // }}
      >
        Zur Anmeldung
      </a>
    </div>
  );
}
