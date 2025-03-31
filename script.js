// --- EXTREMELY RICH LIST OF MUSIC GENRES ---
const musicGenres = [
    // --- Rock & Subgenres ---
    "Rock and Roll", "Classic Rock", "Hard Rock", "Arena Rock", "Glam Rock",
    "Progressive Rock (Prog Rock)", "Symphonic Prog", "Canterbury Scene", "Zeuhl", "Krautrock",
    "Psychedelic Rock", "Acid Rock", "Space Rock", "Stoner Rock", "Desert Rock",
    "Punk Rock", "Proto-Punk", "Hardcore Punk", "NYHC (New York Hardcore)", "DC Hardcore", "Crust Punk", "D-beat", "Anarcho-punk", "Oi!", "Street Punk",
    "Pop Punk", "Skate Punk", "Emo", "Midwest Emo", "Screamo", "Post-Hardcore",
    "Post-Punk", "Gothic Rock (Goth Rock)", "Deathrock", "Dark Wave", "Coldwave", "Ethereal Wave",
    "New Wave", "Synth-pop", "Sophisti-Pop",
    "Alternative Rock", "Indie Rock", "Twee Pop", "C86", "College Rock",
    "Grunge", "Post-Grunge",
    "Shoegaze", "Dream Pop", "Noise Rock", "Noise Pop", "No Wave",
    "Art Rock", "Experimental Rock", "Avant-Prog", "Rock in Opposition (RIO)",
    "Southern Rock", "Blues Rock", "Roots Rock", "Swamp Rock",
    "Folk Rock", "Celtic Rock", "Medieval Folk Rock",
    "Surf Rock", "Garage Rock", "Freakbeat",
    "Math Rock", "Post-Rock", "Instrumental Rock",
    "Rockabilly", "Psychobilly",
    "Industrial Rock", "Neue Deutsche Härte",
    "Rap Rock", "Funk Rock", "Funk Metal", "Rap Metal",

    // --- Metal & Subgenres ---
    "Heavy Metal", "NWOBHM (New Wave of British Heavy Metal)", "Traditional Heavy Metal",
    "Speed Metal", "Thrash Metal", "Crossover Thrash", "Teutonic Thrash Metal", "Bay Area Thrash Metal",
    "Death Metal", "Technical Death Metal", "Brutal Death Metal", "Melodic Death Metal (Melodeath)", "Death 'n' Roll", "Death Doom",
    "Black Metal", "Symphonic Black Metal", "Atmospheric Black Metal", "Depressive Suicidal Black Metal (DSBM)", "Viking Metal", "Pagan Metal", "War Metal", "Blackgaze",
    "Power Metal", "Symphonic Power Metal", "Epic Metal",
    "Doom Metal", "Traditional Doom", "Epic Doom", "Stoner Doom", "Sludge Metal", "Funeral Doom", "Drone Metal",
    "Progressive Metal", "Djent",
    "Groove Metal", "Alternative Metal", "Nu Metal",
    "Metalcore", "Melodic Metalcore", "Mathcore", "Deathcore",
    "Gothic Metal", "Folk Metal", "Celtic Metal", "Medieval Metal", "Pirate Metal",
    "Industrial Metal", "Cyber Metal", "Avant-Garde Metal", "Experimental Metal",
    "Glam Metal (Hair Metal)", "Christian Metal (White Metal)", "Unblack Metal",

    // --- Pop & Subgenres ---
    "Pop", "Teen Pop", "Boy Band", "Girl Group", "Bubblegum Pop", "Sunshine Pop",
    "Electropop", "Dance-Pop", "Hyperpop", "PC Music", "Bedroom Pop",
    "Indie Pop", "Chamber Pop", "Baroque Pop",
    "Power Pop", "Jangle Pop",
    "Art Pop", "Progressive Pop",
    "J-Pop", "K-Pop", "C-Pop", "Mandopop", "Cantopop", "P-Pop (Pinoy Pop)", "V-Pop (Vietnamese Pop)", "T-Pop (Thai Pop)",
    "Europop", "Eurobeat", "Eurodance", "Italo Disco", "French Pop", "Schlager",
    "Latin Pop", "Tropicalia",
    "Afropop",

    // --- Electronic & Subgenres ---
    "Electronic", "Ambient", "Dark Ambient", "Space Ambient", "Isolationism", "Illbient",
    "Downtempo", "Chill-out", "Psybient", "Lounge", "Exotica", "Space Age Pop",
    "Trip Hop", "Bristol Sound",
    "IDM (Intelligent Dance Music)", "Glitch", "Glitch Hop",
    "Chiptune (8-bit)", "Bitpop", "Nintendocore",
    "Synthwave", "Retrowave", "Outrun", "Darksynth", "Futuresynth",
    "Vaporwave", "Simpsonwave", "Mallsoft", "Future Funk",
    "Chillwave", "Hypnagogic Pop",
    "House", "Chicago House", "Acid House", "Deep House", "Garage House", "Hip House", "Tech House", "Progressive House", "Electro House", "Fidget House", "Tribal House", "Funky House", "French House", "Microhouse", "Future House", "Bass House", "Tropical House", "Ghetto House", "Outsider House",
    "Techno", "Detroit Techno", "Minimal Techno", "Acid Techno", "Hard Techno", "Industrial Techno", "Ambient Techno", "Dub Techno",
    "Trance", "Acid Trance", "Classic Trance", "Goa Trance", "Psytrance (Psy)", "Full-on Psytrance", "Progressive Psytrance", "Dark Psytrance", "Forest Psytrance", "Suomisaundi", "Progressive Trance", "Uplifting Trance", "Tech Trance", "Hard Trance", "Vocal Trance",
    "Hardcore / Hard Dance", "Hardstyle", "Jumpstyle", "Gabber", "Happy Hardcore", "UK Hardcore", "Breakcore", "Speedcore", "Terrorcore", "Frenchcore", "Hardbass",
    "Drum and Bass (DnB)", "Jungle", "Atmospheric DnB", "Liquid Funk", "Neurofunk", "Jump-Up", "Techstep", "Darkstep", "Ragga Jungle", "Drumstep",
    "Dubstep", "Brostep", "Chillstep", "Post-Dubstep", "Riddim",
    "Breakbeat", "Big Beat", "Acid Breaks", "Florida Breaks", "Nu Skool Breaks",
    "UK Garage", "2-Step Garage", "Speed Garage", "Bassline", "Future Garage",
    "Grime", "UK Funky",
    "Electro", "Electroclash", "Electro-industrial",
    "EBM (Electronic Body Music)", "Aggrotech", "Futurepop",
    "Electro Swing",
    "Berlin School", "New Age",
    "Musique Concrète", "Sound Collage", "Plunderphonics", "Lowercase",

    // --- Hip Hop / Rap & Subgenres ---
    "Hip Hop", "Old School Hip Hop", "New School Hip Hop", "Golden Age Hip Hop", "Boom Bap",
    "East Coast Hip Hop", "Hardcore Hip Hop", "Mafioso Rap",
    "West Coast Hip Hop", "G-Funk", "Hyphy",
    "Southern Hip Hop (Dirty South)", "Crunk", "Trap", "Drill", "Chicago Drill", "UK Drill", "NY Drill", "Pluggnb",
    "Midwest Hip Hop", "Chopped and Screwed",
    "Conscious Hip Hop", "Political Hip Hop", "Abstract Hip Hop",
    "Jazz Rap", "Alternative Hip Hop", "Comedy Hip Hop", "Nerdcore",
    "Horrorcore", "Memphis Rap",
    "Cloud Rap", "Emo Rap", "Mumble Rap",
    "UK Hip Hop", "Road Rap", "Afroswing",
    "Latin Hip Hop", "Chicano Rap",
    "Christian Hip Hop", "Experimental Hip Hop", "Industrial Hip Hop",
    "Turntablism", "Instrumental Hip Hop", "Lo-fi Hip Hop", "Phonk", "Drift Phonk",

    // --- R&B / Soul / Funk ---
    "Rhythm and Blues (R&B)", "Doo-wop", "Jump Blues",
    "Soul", "Motown Sound", "Southern Soul", "Memphis Soul", "Philly Soul", "Psychedelic Soul", "Blue-Eyed Soul", "Northern Soul",
    "Funk", "P-Funk", "Deep Funk", "Go-go", "Minneapolis Sound",
    "Disco", "Italo Disco", "Eurodisco", "Nu-disco", "Post-disco",
    "Contemporary R&B", "New Jack Swing", "Hip Hop Soul", "Neo Soul", "Alternative R&B (PBR&B)", "Quiet Storm",

    // --- Jazz & Subgenres ---
    "Jazz", "Ragtime", "Dixieland (New Orleans Jazz)", "Chicago Jazz",
    "Swing", "Big Band", "Kansas City Jazz", "Western Swing",
    "Bebop", "Hard Bop", "Vocalese",
    "Cool Jazz", "West Coast Jazz",
    "Modal Jazz", "Free Jazz", "Avant-Garde Jazz",
    "Jazz Fusion", "Jazz-Funk", "Jazz Rock",
    "Smooth Jazz", "Crossover Jazz", "Latin Jazz", "Afro-Cuban Jazz", "Bossa Nova",
    "Acid Jazz", "Nu Jazz", "Electro Swing", "Punk Jazz",
    "Third Stream", "Chamber Jazz", "Spiritual Jazz", "Gypsy Jazz (Jazz Manouche)", "Free Funk",

    // --- Blues & Subgenres ---
    "Blues", "Country Blues", "Delta Blues", "Piedmont Blues", "Texas Blues",
    "Electric Blues", "Chicago Blues", "West Coast Blues", "British Blues",
    "Swamp Blues", "Soul Blues", "Blues Rock", "Punk Blues", "Boogie-Woogie",

    // --- Folk & Subgenres ---
    "Folk", "Traditional Folk Music (of various cultures)", "Ballad", "Sea Shanty",
    "Contemporary Folk", "American Folk Revival", "Americana", "Progressive Folk",
    "Psychedelic Folk (Psych Folk)", "Freak Folk", "New Weird America",
    "Folk Rock", "Electric Folk", "Celtic Folk", "Filk Music", "Anti-folk", "Neofolk", "Dark Folk",
    "Indie Folk", "Chamber Folk", "Skiffle", "Cowpunk", "Folk Punk", "Celtic Punk",

    // --- Country & Subgenres ---
    "Country", "Appalachian Folk (Old-time music)", "Hillbilly", "Bluegrass", "Progressive Bluegrass",
    "Traditional Country", "Honky Tonk", "Western Music (Cowboy Music)", "Western Swing",
    "Bakersfield Sound", "Nashville Sound", "Countrypolitan",
    "Outlaw Country", "Red Dirt", "Texas Country",
    "Country Pop", "Country Rock", "Alt-Country (Alternative Country)", "Gothic Country",
    "Truck Driving Country", "Cowpunk",

    // --- Reggae / Ska / Dub & Subgenres ---
    "Ska", "Traditional Ska", "2 Tone Ska", "Third Wave Ska", "Ska Punk",
    "Rocksteady",
    "Reggae", "Early Reggae (Skinhead Reggae)", "Roots Reggae", "Dub", "Dancehall", "Ragga", "Reggaeton", "Lovers Rock", "Reggae Fusion",

    // --- Classical & Historical ---
    "Classical Music", "Early Music", "Medieval Music", "Gregorian Chant", "Ars Nova",
    "Renaissance Music",
    "Baroque Music", "Opera", "Oratorio", "Cantata", "Concerto Grosso", "Fugue",
    "Classical Period Music", "Symphony", "Sonata Form", "String Quartet", "Opera Buffa",
    "Romantic Music", "Art Song (Lied)", "Program Music", "Nationalism in Music",
    "Modern Classical", "Impressionism", "Expressionism", "Serialism", "Neoclassicism",
    "Contemporary Classical", "Minimalism", "Postminimalism", "Spectralism", "Polystylism",
    "Avant-garde Classical", "Electronic Classical Music", "Aleatoric Music",
    "Chamber Music", "Orchestral Music", "Choral Music", "A cappella",

    // --- World Music & Regional Styles ---
    "World Music", "Global Bass",
    "African Music", "Afrobeat", "Highlife", "Jùjú Music", "Palm-wine music", "Makossa", "Benga", "Soukous (Lingala)", "Mbalax", "Chimurenga", "Mbaqanga", "Isicathamiya", "Gnawa", "Ethiopian Jazz", "Sahrawi Music", "Tuareg Music (Desert Blues)", "Rai", "Chaabi (Algerian)", "Chaabi (Moroccan)", "Cape Verdean Morna", "Funaná",
    "Latin American Music", "Salsa", "Salsa Dura", "Salsa Romántica", "Timba", "Son Cubano", "Mambo", "Cha-cha-chá", "Rumba",
    "Bossa Nova", "Samba", "Pagode", "Axé Music", "Forró", "Sertanejo", "MPB (Música popular brasileira)", "Choro", "Frevo", "Maracatu", "Tropicalia",
    "Tango", "Nuevo Tango", "Milonga",
    "Cumbia", "Vallenato", "Porro", "Champeta",
    "Merengue", "Bachata",
    "Reggaeton", "Latin Trap",
    "Andean Music", "Huayno", "Saya", "Nueva Canción",
    "Mariachi", "Ranchera", "Norteño", "Banda Sinaloense",
    "Asian Music", "Indian Classical Music", "Hindustani Classical", "Carnatic Music", "Qawwali", "Ghazal", "Bhangra", "Bollywood Music", "Indian Pop (Indipop)", "Raga Rock",
    "Gamelan", "Dangdut", "Kroncong",
    "Luk Thung", "Mor Lam",
    "Japanese Traditional Music (Hōgaku)", "Gagaku", "Enka", "City Pop (Japan)", "Shibuya-kei",
    "Korean Traditional Music (Gugak)", "Pansori", "Trot (Korea)",
    "Chinese Traditional Music", "Cantopop", "Mandopop",
    "Persian Traditional Music", "Arabic Traditional Music", "Maqam", "Tarab", "Arabic Pop", "Khaliji",
    "Turkish Folk Music", "Turkish Pop", "Arabesque", "Anatolian Rock",
    "Central Asian Music", "Tuvan Throat Singing",
    "European Folk Music", "Celtic Music", "Irish Folk", "Scottish Folk", "Breton Music",
    "Fado", "Flamenco", "Nuevo Flamenco",
    "Klezmer", "Balkan Brass (Čoček)", "Romanian Lăutărească", "Sevdalinka", "Rebetiko", "Laïkó",
    "Alpine Folk Music (Volksmusik)", "Yodeling", "Polka",
    "Oceanic Music", "Australian Aboriginal Music", "Maori Music (Waiata)", "Pacific Reggae", "Jawaiian",
    "Caribbean Music", "Calypso", "Soca", "Zouk", "Compas (Kompa)", "Mento",

    // --- Other / Niche / Functional / Experimental ---
    "Experimental Music", "Free Improvisation", "Noise", "Japanoise", "Harsh Noise Wall (HNW)", "Power Electronics",
    "Industrial", "Power Noise", "Death Industrial", "Neofolk", "Martial Industrial",
    "Dark Ambient", "Ritual Ambient",
    "Drone Music", "Sound Art", "Field Recordings", "ASMR (as music?)",
    "Library Music", "Production Music",
    "Video Game Music (VGM)", "Nintendocore", "Bitpop", "Orchestral VGM",
    "Film Score", "Soundtrack", "Musical Theatre",
    "Comedy Music", "Parody Music", "Novelty Song",
    "Spoken Word", "Poetry Reading", "Audio Drama",
    "Christian Music (across various genres e.g., CCM, Worship)", "Gospel", "Spirituals", "Southern Gospel",
    "Children's Music", "Lullaby",
    "Marching Band", "Brass Band", "Military Music", "Fanfare",
    "Exotica", "Lounge Music", "Easy Listening",
    "Bardcore", "Vikingarock"
];


// --- Page Logic ---

// Get DOM elements
const randomizeButtonElement = document.getElementById('randomizeButton');
const resultElement = document.getElementById('resultDisplay');
const genreCountElement = document.getElementById('genreCount');
// Date element reference removed
const resultContainerElement = document.getElementById('result-container');

// Variable to store the interval ID for the animation
let animationIntervalId = null;

// Date formatting function removed

// Function to randomize the genre with animation
function randomizeGenre() {
    // 1. Disable the button to prevent multiple clicks during animation
    randomizeButtonElement.disabled = true;

    // 2. Clear any previous interval just in case
    if (animationIntervalId) {
        clearInterval(animationIntervalId);
    }

    // 3. Determine the FINAL genre result BEFORE starting animation
    const finalGenre = musicGenres[Math.floor(Math.random() * musicGenres.length)];

    // 4. Add styling for the animation phase
    resultElement.classList.add('randomizing');
    resultElement.textContent = '...'; // Initial text while randomizing

    // 5. Start the "slot machine" interval
    const animationDuration = 2000; // Total animation time in milliseconds (e.g., 2 seconds)
    const intervalTime = 75;       // How often the text updates (milliseconds)

    animationIntervalId = setInterval(() => {
        // Display a *temporary* random genre
        const temporaryGenre = musicGenres[Math.floor(Math.random() * musicGenres.length)];
        resultElement.textContent = temporaryGenre;
    }, intervalTime);

    // 6. Schedule the end of the animation
    setTimeout(() => {
        // Stop the interval
        clearInterval(animationIntervalId);
        animationIntervalId = null; // Clear the interval ID

        // Remove animation styling
        resultElement.classList.remove('randomizing');

        // Display the FINAL result
        resultElement.textContent = finalGenre;

        // Re-enable the button
        randomizeButtonElement.disabled = false;

    }, animationDuration);
}

// Set the genre count when the page loads
document.addEventListener('DOMContentLoaded', () => {
    genreCountElement.textContent = musicGenres.length;
    // Line setting date text removed
});

// Add event listener to the button
randomizeButtonElement.addEventListener('click', randomizeGenre);

// END OF: script.js