import Image from "next/image";
import Link from "next/link";
import { Download, CheckCircle, MessageCircle } from "lucide-react";

type Game = {
  slug: string;
  name: string;
  icon: string;
  downloadsLabel: string;
  bonusLabel: string;
  minWithdraw: string;
  tagline: string;
  description: string;
  features: string[];
  externalUrl: string;
};

const games: Game[] = [
  {
    slug: "rummy-meet",
    name: "Rummy Meet",
    icon: "/window.svg",
    downloadsLabel: "807K+ Downloads",
    bonusLabel: "₹79 Bonus on Signup!",
    minWithdraw: "₹300",
    tagline: "India's Fastest Rummy Platform | 200M+ Players",
    description:
      "Rummy Meet App – play cash games, daily tournaments, and withdraw instantly.",
    features: [
      "Instant Withdrawal",
      "24/7 Support",
      "Daily Tournaments",
      "Secure Gaming",
    ],
    externalUrl: "https://scrunchiezine.com/",
  },
];

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Game not found</h1>
        <p className="mt-2">
          <Link href="/" className="underline text-blue-600">
            Go back
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Back link */}
      <div className="w-full max-w-3xl mb-4">
        <Link href="/" className="text-sm text-gray-600 hover:underline">
          ← Back to Games
        </Link>
      </div>

      {/* Card */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        {/* Icon + Title */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Image src={game.icon} alt={game.name} width={80} height={80} />
          <h1 className="text-3xl font-bold text-blue-900">
            {game.name} Apk Download
          </h1>
          <p className="text-gray-600">{game.tagline}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-lg font-semibold text-red-600">
            <Download className="w-5 h-5 mr-2" />
            {game.downloadsLabel}
          </div>
          <div className="bg-red-100 rounded-lg p-4 flex items-center justify-center text-lg font-semibold text-red-700">
            🎁 Get Instant {game.bonusLabel}
          </div>
        </div>

        {/* Extra info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-700">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            100% Safe & Secure
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Min. Withdrawal {game.minWithdraw}
          </div>
        </div>

        {/* Features */}
        <h2 className="mt-8 mb-4 text-lg font-semibold text-blue-900 text-center">
          Key Features
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {game.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 bg-gray-50 rounded-md p-3 text-sm text-gray-800"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              {feature}
            </div>
          ))}
        </div>

        {/* Download button */}
        <div className="flex justify-center mt-8">
          <a
            href={game.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white text-lg font-semibold shadow hover:bg-red-700 transition"
          >
            <Download className="w-5 h-5" />
            Download {game.name}
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-gray-500 text-center">
          <strong>Disclaimer:</strong> We may earn a commission when you click
          links. Always play responsibly and only if legal in your region.
        </p>
      </div>
    </div>
  );
}
