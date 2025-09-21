import Link from "next/link";
import Image from "next/image";
import { getSuggestedGames } from "@/lib/games";
import { Card, CardContent } from "@/components/ui/card";

interface GameSuggestionsProps {
  currentGameId: string;
  title?: string;
}

export function GameSuggestions({ currentGameId, title = "Suggested Games" }: GameSuggestionsProps) {
  const suggestedGames = getSuggestedGames(currentGameId, 4);

  return (
    <div className="w-full max-w-3xl mt-12">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {suggestedGames.map((game) => (
          <Link key={game.id} href={`/${game.slug}`}>
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={game.icon}
                    alt={game.name}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {game.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {game.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>⭐ {game.rating}</span>
                        <span>📱 {game.downloads}</span>
                      </div>
                      <div className="text-sm font-semibold text-red-600">
                        {game.bonus} Bonus
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/all-apps" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Games
        </Link>
      </div>
    </div>
  );
}
