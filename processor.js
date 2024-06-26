const fs = require('fs');
const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

if(!process.argv[2]) {
    console.log('Please provide an input SCSS file path.');
    process.exit(1);
}

try {
    const filePath = process.argv[2];
    sass.compileAsync(process.argv[2]).then(result => {
        const cssContent = result.css.toString();

        // Process with PostCSS and Autoprefixer
        postcss([autoprefixer, cssnano]).process(cssContent).then(processedResult => {
            const outputCss = processedResult.css.toString();

            // Write the processed CSS to a file
            const outputPath = `${filePath.replace('.scss', '.css')}`;
            fs.writeFileSync(outputPath, outputCss);

            console.log(`Processed file saved at: ${outputPath}`);
        })
    })
} catch (error) {
    console.error('Error processing file:', error);
}
