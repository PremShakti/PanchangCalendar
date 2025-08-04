import Link from "next/link";

export default function Home() {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return (
    <div>
      <main className=" container relative">
        <nav>
          <ul className="  space-y-4 text-white font-bold">
            {months.map((month, i) => (
              <li
                key={i}
                className="bg-blue-600 p-2 rounded-md  text-2xl hover:bg-blue-500 "
              >
                <Link
                  key={month}
                  href={`/${month}`}
                  className="w-full block  text-center"
                >
                  {month}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
