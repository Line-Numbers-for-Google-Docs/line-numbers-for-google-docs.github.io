window.$docsify = {
    name: 'Line Numbers for GDocs',
    repo: 'https://github.com/Line-Numbers-for-Google-Docs',
    coverpage: true,
    loadSidebar: true,
    auto2top: true,
    executeScript: true,
    ga: 'UA-44179721-6',

    plugins: [
        function (hook, vm) {
            hook.doneEach(function () {
                // Remove underline for anchors
                const anchors = document.getElementsByClassName('anchor');
                for (let i = 0; i < anchors.length; i++) {
                    const anchor = anchors[i];
                    anchor.style['text-decoration'] = 'none';
                }
            });
        },
    ]
}