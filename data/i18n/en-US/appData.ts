import dynamic from "next/dynamic";

const importConfig = {
	ssr: false,
};

export default [
	{
		name: "Self-discipline Artifact: Point Award Manual",
		channel: 4,
		icon: "/icons/tasks.png",
		link: "point_brochure",
		icon_color: "",
		description: "Use the dopamine mechanism to help you self-discipline",
	},
	{
		name: "Ion equation balancing",
		channel: 4,
		icon: "/icons/lens.png",
		link: "coming",
		icon_color: "teal",
	},
	{
		name: "Seed to Magnetic Link",
		channel: 4,
		icon: "cloud_download",
		link: "coming",
		icon_color: "deblue-300",
		description: "Convert torrent files into magnetic links",
	},
	{
		name: "Text Recognition",
		channel: 1,
		icon: "font_download",
		link: "ocr",
		icon_color: "blue-400",
		description:
			"Recognize the text in the picture, support multiple languages",
	},
	{
		name: "Service Agreement Generation",
		channel: 3,
		icon: "lock",
		link: "policy_generator",
		icon_color: "grey-500",
		description: "Generate customized service agreement and privacy policy",
	},
	{
		name: "Image recognition",
		link: "aic",
		icon: "photo_album",
		icon_color: "blue-500",
		help: "",
		description:
			"Identify objects in the picture, support plants/animals/cars/dishes, etc.",
		channel: 1,
	},
	{
		name: "Screen Recording",
		link: "screenrecord",
		icon: "videocam",
		icon_color: "orange-400",
		help: "Only for the latest version of Chrome/Firefox/Opera on PC",
		channel: 2,
	},
	{
		name: "UA Resolution",
		link: "ua",
		icon: "devices",
		icon_color: "teal-300",
		help: "The default is the native UA (UserAgent)",
		channel: 3,
	},
	{
		name: "Network log capture",
		link: "console",
		icon: "language",
		icon_color: "indigo-300",
		help: "The dynamically generated content may not be crawlable",
		channel: 3,
	},
	// {
	// name: "Translation",
	// link: "translate",
	// icon: "translate",
	// icon_color: "blue-400",
	// help: "Use Baidu translation engine",
	// channel: 4,
	// },
	{
		name: "Date & Time Calculation",
		link: "date_calculator",
		icon: "/icons/Google_Calendar_icon_(2020).svg",
		icon_color: "purple-200",
		help: "Input negative numbers can be calculated forward",
		description:
			"Calculate the number of days and time between two dates, or calculate which day before and after a few days, you can calculate how long you have lived :)",
		channel: 4,
	},
	{
		name: "Pomodoro",
		link: "tomato",
		icon: "access_alarm",
		icon_color: "red",
		description:
			"The Pomodoro Technique has greatly improved the efficiency of work, and there will be an unexpected sense of accomplishment.",
		channel: 4,
	},
	{
		name: "Cross-device text transfer",
		link: "clipboard",
		icon: "call_split",
		icon_color: "green",
		help: "Large files may have a large delay",
		network: true,
		channel: 4,
	},
	{
		name: "GIF decomposition",
		link: "gif_lib",
		icon: "collections",
		icon_color: "teal",
		description: "Decompose the GIF picture frame by frame",
		channel: 2,
	},
	{
		name: "QR code generation",
		link: "qrcode",
		icon: "/icons/qrcode.png",
		help: "",
		description:
			"Support custom color and size; support WIFI code generation",
		channel: 2,
	},
	{
		name: "Get the cover of station B",
		link: "bilibili_cover",
		icon: "photo_size_select_actual",
		icon_color: "pink-300",
		description: "Download videos and fan drama covers on Bilibili",
		help: "Please start the serial number with md, for example: md425 (a scientific super-electromagnetic gun); for video, please start with av, for example: av32211954. Click the picture address to copy",
		channel: 4,
	},
	{
		name: "pornhub style picture generation",
		link: "fake_pornhub_logo",
		icon: "insert_emoticon",
		icon_color: "orange",
		help: "For entertainment only, at your own risk for any consequences",
		channel: 2,
	},
	{
		name: "Notes",
		link: "note",
		icon: "/icons/scratchpad.png",
		icon_color: "amber",
		help: "All content is saved in the local browser cache and will not be uploaded to the server.",
		channel: 4,
	},
	{
		name: "manifest generated",
		link: "manifest",
		icon: "settings_applications",
		icon_color: "grey",
		help: "Please Baidu for language type. For example, American English is en-us",
		channel: 3,
	},
	{
		name: "Chinese Convert",
		link: "sctc",
		icon: "font_download",
		icon_color: "red",
		help: "",
		description: "The Melancholy Tortoise",
		channel: 4,
	},
	{
		name: "Decision",
		link: "decision",
		icon: "widgets",
		icon_color: "indigo",
		description:
			"Randomly select, select the gospel of patients with difficulty",
		help: "",
		channel: 4,
	},
	{
		name: "Text Generation",
		link: "text_create",
		icon: "font_download",
		icon_color: "brown-200",
		description:
			"Generate regular text in batches, or template text, such as marketing number copywriting",
		help: "Use ${} to represent keywords, such as ${5} for keywords whose first item is 5. For the time being, only a unified tolerance/common ratio is supported (actually because of laziness)",
		channel: 4,
	},
	{
		name: "File Tree Generation",
		link: "folder_tree",
		icon: "/icons/file.jpg",
		description: "Generate folder structure",
		help: "Mobile terminal is not supported; too many files may be stuck",
		channel: 3,
	},
	{
		name: "GIF production",
		link: "gif",
		icon: "gif",
		icon_color: "light-green",
		help: "Excessively large videos may be stuck, all operations are performed locally and do not consume data traffic",
		channel: 2,
	},
	{
		name: "Analysis of Sakura Anime Video",
		link: "imomoe_parse",
		icon: "ondemand_video",
		icon_color: "pink",
		help: "Part of the show cannot be parsed (because it is a streaming video)",
		channel: 2,
		network: true,
	},
	{
		name: "Nine grid cut map",
		link: "img_split",
		icon: "apps",
		icon_color: "blue",
		description:
			"Cut the picture into nine square grids and post on social media to force the grid to be higher",
		help: "",
		channel: 2,
	},
	{
		name: "Regular expression test",
		link: "regexp_test",
		icon: "sort_by_alpha",
		icon_color: "green-200",
		description: "Test whether the regular expression matches the text",
		help: "",
		channel: 3,
	},
	{
		name: "html to JSX",
		link: "html2jsx",
		icon: "/icons/code.png",
		help: "Some Html attributes are not supported. Please manually change to the little hump naming method. All operations are performed locally and do not consume data traffic",
		channel: 3,
	},
	{
		name: "mimetype query",
		link: "mimetype",
		icon: "attachment",
		icon_color: "purple",
		help: "",
		channel: 3,
	},
	{
		name: "Sports Scoreboard",
		link: "scoreboard",
		icon: "today",
		icon_color: "lime",
		help: "",
		channel: 4,
	},
	{
		name: "Expression Production",
		link: "emoticon",
		icon: "tag_faces",
		icon_color: "yellow",
		help: "",
		channel: 2,
	},
	{
		name: "Almighty text conversion",
		link: "endecode",
		icon: "wb_auto",
		icon_color: "cyan-200",
		description:
			"Probably the most comprehensive text conversion tool, supporting up to 7 types of text",
		help: "",
		channel: 3,
	},
	{
		name: "Picture to base64",
		link: "img2base64",
		icon: "photo",
		icon_color: "green-300",
		help: "If the picture is too large, it may be stuck",
		channel: 2,
	},
	{
		name: "Picture & subtitle stitching",
		link: "img_mosaic",
		icon: "view_column",
		icon_color: "amber-600",
		help: "The picture may be stuck if it is too large; drag the shadow part to adjust the splicing range, suitable for subtitles or long picture splicing",
		channel: 2,
	},
	{
		name: "Chemical equation balance",
		link: "cem",
		icon: "linear_scale",
		icon_color: "blue-600",
		channel: 4,
	},
	{
		name: "Comparison of Cloud Music Playlist",
		link: "songlist",
		icon: "queue_music",
		icon_color: "red-600",
		channel: 4,
		network: true,
	},
	{
		name: "Picture Compression",
		link: "img_compress",
		icon: "/icons/finance.png",
		icon_color: "brown-300",
		help: "A picture that is too small may have no effect",
		channel: 2,
	},
	{
		name: "Word Cloud Picture Making",
		link: "word_cloud",
		icon: "cloud_circle",
		icon_color: "green-300",
		help: "Click on the picture to save the picture; the size of the unwritten text will be a random size",
		channel: 2,
	},
	{
		name: "Text to Speech",
		link: "tts",
		icon: "mic",
		icon_color: "teal-300",
		help: "Synthesize up to 500 characters at a time",
		description:
			"Convert text into mp3 read aloud audio, support multiple voice lines and speed/tone/volume/custom",
		channel: 1,
		network: true,
	},
	{
		name: "Amount figure capitalized",
		link: "num2chinese",
		icon: "attach_money",
		icon_color: "yellow-600",
		help: "The generated result is for reference only",
		channel: 4,
	},
	{
		name: "Color Picker",
		link: "color_picker",
		icon: "colorize",
		icon_color: "amber-800",
		help: "Can be precisely adjusted by the keyboard arrow keys",
		channel: 2,
	},
	{
		name: "Dictionary",
		link: "dic_ci",
		icon: "/icons/book.png",
		description: "Convenient query for common words",
		channel: 4,
		network: true,
	},
	{
		name: "Xiehouyu query",
		link: "xiehouyu",
		icon: "/icons/book.png",
		description: "Support the mutual search of mystery and mystery",
		channel: 4,
		network: true,
	},
	{
		name: "Idioms Dictionary",
		link: "dic_idiom",
		icon: "/icons/book.png",
		help: "Support abbreviations",
		channel: 4,
		network: true,
	},
	{
		name: "Dictionary",
		link: "dic_word",
		help: "Too simple word query is not currently supported",
		description:
			"Our Chinese characters have a history of five thousand years after pens and paintings",
		channel: 4,
		network: true,
	},
	{
		name: "js keyboard code query",
		link: "js_keycode",
		icon: "settings_applications",
		channel: 3,
	},
	{ name: "Hello Tool", link: "http://hellotool.htm.kim", channel: 5 },
	{
		name: "Boutique website navigation",
		link: "https://imyshare.com/?from=ygktool",
		channel: 5,
	},
	{ name: "Mo Ling Music", link: "https://yinyue.qugeek.com/", channel: 5 },
];
