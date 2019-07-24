module.exports = function(grunt)
{
    var svgs = 'icons/*.svg',
        sass = 'sass/foundation/fonts/',
        font = '../web/fonts/icons';

    grunt.initConfig({
        webfont: {
            build: {
                src: svgs,
                dest: font,
                destCss: sass,
                types: ['eot,woff2,woff,ttf,svg'],
                options: {
                    stylesheet: 'scss',
                    fontFilename: 'icons-common',
                    engine: 'fontforge',
                    htmlDemo: false,
                    relativeFontPath: '../fonts/icons/',
                    templateOptions: { classPrefix: 'icon-' },
                    rename: function(name)
                    {
                        var filename = name.replace(/^.*[\\\/]/, '');
                        var path = name.replace(filename, '');

                        return filename.substring(3, filename.length);
                    }
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['webfont'])
}