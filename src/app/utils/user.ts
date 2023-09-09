//! Takes the rank string of the user and returns the rank name

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





// setInterval(function () {
//     // your code goes here...
//     userRegen()

// }, 60 * 1000);

// export async function userRegen() {
//     const session = await getServerSession(authOptions);
//     const userId = session?.user?.id;
//     const energy = parseInt((await getUserInfo()).slice(9, 10))
//     const maxEnergy = parseInt((await getUserInfo()).slice(10, 11))
//     if (energy < maxEnergy) {
//         await prisma.user.update({
//             where: {
//                 id: userId,
//             },
//             data: {

//                 energy: parseInt((await getUserInfo()).slice(9, 10)) + 5,
//             },
//         });
//     } else {
//         return
//     }
// }




// let userObject = {
//     id: getUserInfo()[0],
//     avatar: getUserInfo()[1],
//     username: getUserInfo()[2],
//     rank: getUserInfo()[3],
//     village: getUserInfo()[4],
//     experience: getUserInfo()[5],
//     level: getUserInfo()[6],
//     health: getUserInfo()[7],
//     maxHealth: getUserInfo()[8],
//     energy: getUserInfo()[9],
//     maxEnergy: getUserInfo()[10],
//     stat1: getUserInfo()[11],
//     stat2: getUserInfo()[12],
//     stat3: getUserInfo()[13],
//     stat4: getUserInfo()[14],
//     stat5: getUserInfo()[15],
//     stat6: getUserInfo()[16],
//     stat7: getUserInfo()[17],
//     stat8: getUserInfo()[18],
//     yen: getUserInfo()[19],
//     email: getUserInfo()[20],





