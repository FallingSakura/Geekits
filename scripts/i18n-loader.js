const XLSX = require("xlsx/xlsx.js");

const fs = require("fs");

const { Readable } = require("stream");
XLSX.stream.set_readable(Readable);

const path = require("path");

const SOURCE_FILE = "../src/data/i18n.xlsx";
const TARGET_FILE = "../src/data/i18n.json";

const excelToJSON = ((sourceFile, targetFile) => {
	var workbook = XLSX.readFile(path.join(__dirname, sourceFile));

	workbook.SheetNames.forEach(function (sheetName) {
		// Here is your object
		var XL_row_object = XLSX.utils.sheet_to_row_object_array(
			workbook.Sheets[sheetName]
		);
		var output = {};

		XL_row_object.forEach((row) => {
			strName = row.Name;

			delete row.Name;

			Object.keys(row).forEach((locale) => {
				// console.log(output);
				if (locale in output) {
					output[locale][strName] = row[locale];
				} else {
					output[locale] = {
						[strName]: row[locale],
					};
				}
			});
		});

		fs.writeFileSync(
			path.join(__dirname, targetFile),
			JSON.stringify(output)
		);

		console.log("✅ Convert Successfully", output);
	});
})(SOURCE_FILE, TARGET_FILE);
