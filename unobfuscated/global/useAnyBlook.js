
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host : "play.blooket.com") + "/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/useAnyBlook.js")?.answers?.[0]}`)).then(async x => {
        if (1674653150630 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
            const blooks = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a;
            if (location.pathname == "/blooks") stateNode.setState({ blookData: Object.keys(blooks).reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}), allSets: Object.values(blooks).reduce((a, b) => (a.includes(b.set) ? a : a.concat(b.set)), []) });
            else if (Array.isArray(stateNode.state.unlocks)) stateNode.setState({ unlocks: Object.keys(blooks) });
            else stateNode.setState({ unlocks: blooks });
        }
    });
})();
