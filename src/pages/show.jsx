import ShowBanner from "@/sections/ShowBanner";
import MovieDetails from "@/sections/MovieDetails";
import seasonItems from "@/components/Seasons/seasonItems";

export const metadata = {
    title: 'Show - Stranger Things'
}

export default function () {
    return (
        <>
            <ShowBanner />
            <MovieDetails
                seasons={seasonItems}
            />
        </>
    )
}
