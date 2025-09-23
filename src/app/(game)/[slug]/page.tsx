import Image from "next/image";
import Link from "next/link";
import { Download, CheckCircle } from "lucide-react";
import { getGameBySlug, GAMES } from "@/lib/games";
import { GameSuggestions } from "@/components/game-suggestions";
import { Metadata } from "next";

// Generate static params for all games
export async function generateStaticParams() {
  return GAMES.map((game) => ({
    slug: game.slug,
  }));
}

// Generate metadata for each game
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found",
      description: "The requested game could not be found.",
    };
  }

  return {
    title: game.seo.title,
    description: game.seo.description,
    keywords: game.seo.keywords.join(", "),
    openGraph: {
      title: game.seo.ogTitle,
      description: game.seo.ogDescription,
      images: [game.icon],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: game.seo.ogTitle,
      description: game.seo.ogDescription,
      images: [game.icon],
    },
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-3 md:p-6">
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
            {game.name} APK Download
          </h1>
          <p className="text-gray-600">{game.description}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-200/60 rounded-lg p-4 flex items-center justify-center text-lg font-semibold text-red-600">
            <Download className="w-5 h-5 mr-2" />
            {game.downloads} Downloads
          </div>
          <div className="bg-red-100 rounded-lg p-4 flex items-center justify-center text-lg font-semibold text-red-700">
            🎁 Get Instant {game.bonus} Bonus
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
            Min. Withdrawal {game.minWithdrawal}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex items-center">
            <span>
              <img src="/stars.webp" alt="rating" className=" h-3.5" />
            </span>
          </div>
          <span className="text-gray-600 font-medium">{game.rating}/5 Rating</span>
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
            className="inline-flex text-sm items-center text-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white md:text-lg font-semibold shadow hover:bg-red-700 transition"
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

      {/* Game Suggestions */}
      <GameSuggestions currentGameId={game.id} />
    </div>
  );
}
