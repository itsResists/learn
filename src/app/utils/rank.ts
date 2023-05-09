const showRank = (rank: string) => {
    if (rank == "null") {
        return "Account Error - Rank == 'null' - No rank found";
    } else if (rank == "0") {
        return "Academy Student";
    } else if (rank == "1") {
        return "Genin";
    } else if (rank == "2") {
        return "Chuunin";
    } else if (rank === "3") {
        return "Jounin";
    } else if (rank == "4") {
        return "Kage";
    }
}

export { showRank };
