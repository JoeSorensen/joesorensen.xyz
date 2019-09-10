Vue.component("navbar", {
    template: "<div style=\"\n" +
        "        background-image: url('cdn/splash.png');\n" +
        "\n" +
        "        /* Center and scale the image nicely */\n" +
        "        background-position: center;\n" +
        "        background-repeat: no-repeat;\n" +
        "        background-size: cover;\n" +
        "\n" +
        "        /* Needed to position the navbar */\n" +
        "        position: relative;\n" +
        "    \">\n" +
        "        <nav style=\"background: linear-gradient(90deg, rgba(2,0,36,0) 0%, #0700b8 52%, #00ff88 100%);\">\n" +
        "            <div class=\"container mx-auto px-6 py-2 flex justify-between items-center\">\n" +
        "                <a class=\"font-bold text-2xl lg:text-4xl\" href=\"#\">\n" +
        "                    <img src=\"cdn/Logo_White.png\" width=\"50\">\n" +
        "                </a>\n" +
        "                <div class=\"block lg:hidden\">\n" +
        "                    <button class=\"flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none\">\n" +
        "                        <svg class=\"fill-current h-3 w-3\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "                            <title>Menu</title>\n" +
        "                            <path d=\"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"/>\n" +
        "                        </svg>\n" +
        "                    </button>\n" +
        "                </div>\n" +
        "                <div class=\"hidden lg:block\">\n" +
        "                    <ul class=\"inline-flex\">\n" +
        "                        <li><a class=\"px-4 text-white font-bold\" href=\"/\">Home</a></li>\n" +
        "                        <li><a class=\"px-4 text-white hover:text-blue-800\" href=\"#\">About</a></li>\n" +
        "                        <li><a class=\"px-4 text-white hover:text-blue-800\" href=\"#\">Contact</a></li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </nav>\n" +
        "    </div>"
});