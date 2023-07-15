const setOpenPositions = async (exchange, openPositions) => {
    try {
        const securities = await exchange.fetchPositions();
        let actions = [];

        // Find new positions.
        securities.forEach((security) => {
            const posIndex = openPositions.findIndex(
                (obj) => obj.timestamp === security.timestamp
            );

            if (posIndex === -1) {
                const newPosition = {
                    timestamp: security.timestamp,
                    tradeSize: security.contractSize * security.contracts,
                    tradePair: security.symbol,
                    profit: security.unrealizedPnl,
                    side: security.side,
                };
                openPositions.push(newPosition);

                // Added the action to send to the frontend.
                actions.push({
                    type: "insert",
                    position: newPosition,
                });
            }
        });

        //Find the positions which should be removed.
        for (let i = 0; i < openPositions.length; i++) {
            const openPosIndex = securities.findIndex(
                (obj) => obj.timestamp === openPositions[i].timestamp
            );
            if (openPosIndex === -1) {
                actions.push({
                    type: "remove",
                    position: openPositions[i],
                });

                openPositions.splice(i, 1);
                i--;
            }
        }

        return actions;
    } catch (error) {
        console.log("Cron_SetOpenPosition", error);
    }
};

export default setOpenPositions;
