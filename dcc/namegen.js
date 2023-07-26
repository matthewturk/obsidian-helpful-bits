"use strict";
/**
 *
 * @file A fantasy name generator library.
 * @version 1.0.1
 * @license Public Domain
 * @author Edgar Alvarado (pe1uca)
 *
 * This library is designed after the RinkWorks Fantasy Name Generator.
 * @see http://www.rinkworks.com/namegen/
 *
 * @example
 * import NameGen from "./utils/namegen";
 * let generator = new NameGen.Generator("sV'i");
 * generator.toString();  // Returns a new name each call with toString()
 * // => "entheu'loaf"
 *
 * ## Pattern Syntax
 *
 *   The toString() function creates a name generator based on an input
 * pattern. The letters s, v, V, c, B, C, i, m, M, D, and d represent
 * different types of random replacements. Everything else is produced
 * literally.
 *
 *   s - generic syllable
 *   v - vowel
 *   V - vowel or vowel combination
 *   c - consonant
 *   B - consonant or consonant combination suitable for beginning a word
 *   C - consonant or consonant combination suitable anywhere in a word
 *   i - insult
 *   m - mushy name
 *   M - mushy name ending
 *   D - consonant suited for a stupid person's name
 *   d - syllable suited for a stupid person's name (begins with a vowel)
 *
 *   All characters between parenthesis () are produced literally. For
 * example, the pattern "s(dim)", produces a random generic syllable
 * followed by "dim".
 *
 *   Characters between angle brackets <> produce patterns from the table
 * above. Imagine the entire pattern is wrapped in one of these.
 *
 *   In both types of groupings, a vertical bar | denotes a random
 * choice. Empty groups are allowed. For example, "(foo|bar)" produces
 * either "foo" or "bar". The pattern "<c|v|>" produces a constant,
 * vowel, or nothing at all.
 *
 *   An exclamation point ! means to capitalize the component that
 * follows it. For example, "!(foo)" will produce "Foo" and "v!s" will
 * produce a lowercase vowel followed by a capitalized syllable, like
 * "eRod".
 *
 *   A tilde ~ means to reverse the letters of the component that
 * follows it. For example, "~(foo)" will produce "oof". To reverse an
 * entire template, wrap it in brackets. For example, to reverse
 * "sV'i" as a whole use "~<sV'i>". The template "~sV'i" will only
 * reverse the initial syllable.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NameGen;
(function (NameGen) {
    // Middle Earth
    NameGen.MIDDLE_EARTH = "(bil|bal|ban|hil|ham|hal|hol|hob|wil|me|or|ol|od|gor|for|fos|tol|ar|fin|ere|leo|vi|bi|bren|thor)(|go|orbis|apol|adur|mos|ri|i|na|ole|n)(|tur|axia|and|bo|gil|bin|bras|las|mac|grim|wise|l|lo|fo|co|ra|via|da|ne|ta|y|wen|thiel|phin|dir|dor|tor|rod|on|rdo|dis)";
    // Japanese Names (Constrained)
    NameGen.JAPANESE_NAMES_CONSTRAINED = "(aka|aki|bashi|gawa|kawa|furu|fuku|fuji|hana|hara|haru|hashi|hira|hon|hoshi|ichi|iwa|kami|kawa|ki|kita|kuchi|kuro|marui|matsu|miya|mori|moto|mura|nabe|naka|nishi|no|da|ta|o|oo|oka|saka|saki|sawa|shita|shima|i|suzu|taka|take|to|toku|toyo|ue|wa|wara|wata|yama|yoshi|kei|ko|zawa|zen|sen|ao|gin|kin|ken|shiro|zaki|yuki|asa)(||||||||||bashi|gawa|kawa|furu|fuku|fuji|hana|hara|haru|hashi|hira|hon|hoshi|chi|wa|ka|kami|kawa|ki|kita|kuchi|kuro|marui|matsu|miya|mori|moto|mura|nabe|naka|nishi|no|da|ta|o|oo|oka|saka|saki|sawa|shita|shima|suzu|taka|take|to|toku|toyo|ue|wa|wara|wata|yama|yoshi|kei|ko|zawa|zen|sen|ao|gin|kin|ken|shiro|zaki|yuki|sa)";
    // Japanese Names (Diverse)
    NameGen.JAPANESE_NAMES_DIVERSE = "(a|i|u|e|o|||||)(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)(|(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)|(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)(|(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)))(|||n)";
    // Chinese Names
    NameGen.CHINESE_NAMES = "(zh|x|q|sh|h)(ao|ian|uo|ou|ia)(|(l|w|c|p|b|m)(ao|ian|uo|ou|ia)(|n)|-(l|w|c|p|b|m)(ao|ian|uo|ou|ia)(|(d|j|q|l)(a|ai|iu|ao|i)))";
    // Greek Names
    NameGen.GREEK_NAMES = "<s<v|V>(tia)|s<v|V>(os)|B<v|V>c(ios)|B<v|V><c|C>v(ios|os)>";
    // Hawaiian Names (1)
    NameGen.HAWAIIAN_NAMES_1 = "((h|k|l|m|n|p|w|')|)(a|e|i|o|u)((h|k|l|m|n|p|w|')|)(a|e|i|o|u)(((h|k|l|m|n|p|w|')|)(a|e|i|o|u)|)(((h|k|l|m|n|p|w|')|)(a|e|i|o|u)|)(((h|k|l|m|n|p|w|')|)(a|e|i|o|u)|)(((h|k|l|m|n|p|w|')|)(a|e|i|o|u)|)";
    // Hawaiian Names (2)
    NameGen.HAWAIIAN_NAMES_2 = "((h|k|l|m|n|p|w|)(a|e|i|o|u|a'|e'|i'|o'|u'|ae|ai|ao|au|oi|ou|eu|ei)(k|l|m|n|p|)|)(h|k|l|m|n|p|w|)(a|e|i|o|u|a'|e'|i'|o'|u'|ae|ai|ao|au|oi|ou|eu|ei)(k|l|m|n|p|)";
    // Old Latin Place Names
    NameGen.OLD_LATIN_PLACE_NAMES = "sv(nia|lia|cia|sia)";
    // Dragons (Pern)
    NameGen.DRAGONS_PERN = "<<s|ss>|<VC|vC|B|BVs|Vs>><v|V|v|<v(l|n|r)|vc>>(th)";
    // Dragon Riders
    NameGen.DRAGON_RIDERS = "c'<s|cvc>";
    // Pokemon
    NameGen.POKEMON = "<i|s>v(mon|chu|zard|rtle)";
    // Fantasy (Vowels, R, etc.)
    NameGen.FANTASY_VOWELS_R = "(|(<B>|s|h|ty|ph|r))(i|ae|ya|ae|eu|ia|i|eo|ai|a)(lo|la|sri|da|dai|the|sty|lae|due|li|lly|ri|na|ral|sur|rith)(|(su|nu|sti|llo|ria|))(|(n|ra|p|m|lis|cal|deu|dil|suir|phos|ru|dru|rin|raap|rgue))";
    // Fantasy (S, A, etc.)
    NameGen.FANTASY_S_A = "(cham|chan|jisk|lis|frich|isk|lass|mind|sond|sund|ass|chad|lirt|und|mar|lis|il|<BVC>)(jask|ast|ista|adar|irra|im|ossa|assa|osia|ilsa|<vCv>)(|(an|ya|la|sta|sda|sya|st|nya))";
    // Fantasy (H, L, etc.)
    NameGen.FANTASY_H_L = "(ch|ch't|sh|cal|val|ell|har|shar|shal|rel|laen|ral|jh't|alr|ch|ch't|av)(|(is|al|ow|ish|ul|el|ar|iel))(aren|aeish|aith|even|adur|ulash|alith|atar|aia|erin|aera|ael|ira|iel|ahur|ishul)";
    // Fantasy (N, L, etc.)
    NameGen.FANTASY_N_L = "(ethr|qil|mal|er|eal|far|fil|fir|ing|ind|il|lam|quel|quar|quan|qar|pal|mal|yar|um|ard|enn|ey)(|(<vc>|on|us|un|ar|as|en|ir|ur|at|ol|al|an))(uard|wen|arn|on|il|ie|on|iel|rion|rian|an|ista|rion|rian|cil|mol|yon)";
    // Fantasy (K, N, etc.)
    NameGen.FANTASY_K_N = "(taith|kach|chak|kank|kjar|rak|kan|kaj|tach|rskal|kjol|jok|jor|jad|kot|kon|knir|kror|kol|tul|rhaok|rhak|krol|jan|kag|ryr)(<vc>|in|or|an|ar|och|un|mar|yk|ja|arn|ir|ros|ror)(|(mund|ard|arn|karr|chim|kos|rir|arl|kni|var|an|in|ir|a|i|as))";
    // Fantasy (J, G, Z, etc.)
    NameGen.FANTASY_J_G_Z = "(aj|ch|etz|etzl|tz|kal|gahn|kab|aj|izl|ts|jaj|lan|kach|chaj|qaq|jol|ix|az|biq|nam)(|(<vc>|aw|al|yes|il|ay|en|tom||oj|im|ol|aj|an|as))(aj|am|al|aqa|ende|elja|ich|ak|ix|in|ak|al|il|ek|ij|os|al|im)";
    // Fantasy (K, J, Y, etc.)
    NameGen.FANTASY_K_J_Y = "(yi|shu|a|be|na|chi|cha|cho|ksa|yi|shu)(th|dd|jj|sh|rr|mk|n|rk|y|jj|th)(us|ash|eni|akra|nai|ral|ect|are|el|urru|aja|al|uz|ict|arja|ichi|ural|iru|aki|esh)";
    // Fantasy (S, E, etc.)
    NameGen.FANTASY_S_E = "(syth|sith|srr|sen|yth|ssen|then|fen|ssth|kel|syn|est|bess|inth|nen|tin|cor|sv|iss|ith|sen|slar|ssil|sthen|svis|s|ss|s|ss)(|(tys|eus|yn|of|es|en|ath|elth|al|ell|ka|ith|yrrl|is|isl|yr|ast|iy))(us|yn|en|ens|ra|rg|le|en|ith|ast|zon|in|yn|ys)";
    var symbolMap = {
        s: ['ach', 'ack', 'ad', 'age', 'ald', 'ale', 'an', 'ang', 'ar', 'ard',
            'as', 'ash', 'at', 'ath', 'augh', 'aw', 'ban', 'bel', 'bur', 'cer',
            'cha', 'che', 'dan', 'dar', 'del', 'den', 'dra', 'dyn', 'ech', 'eld',
            'elm', 'em', 'en', 'end', 'eng', 'enth', 'er', 'ess', 'est', 'et',
            'gar', 'gha', 'hat', 'hin', 'hon', 'ia', 'ight', 'ild', 'im', 'ina',
            'ine', 'ing', 'ir', 'is', 'iss', 'it', 'kal', 'kel', 'kim', 'kin',
            'ler', 'lor', 'lye', 'mor', 'mos', 'nal', 'ny', 'nys', 'old', 'om',
            'on', 'or', 'orm', 'os', 'ough', 'per', 'pol', 'qua', 'que', 'rad',
            'rak', 'ran', 'ray', 'ril', 'ris', 'rod', 'roth', 'ryn', 'sam',
            'say', 'ser', 'shy', 'skel', 'sul', 'tai', 'tan', 'tas', 'ther',
            'tia', 'tin', 'ton', 'tor', 'tur', 'um', 'und', 'unt', 'urn', 'usk',
            'ust', 'ver', 'ves', 'vor', 'war', 'wor', 'yer'],
        v: ['a', 'e', 'i', 'o', 'u', 'y'],
        V: ['a', 'e', 'i', 'o', 'u', 'y', 'ae', 'ai', 'au', 'ay', 'ea', 'ee',
            'ei', 'eu', 'ey', 'ia', 'ie', 'oe', 'oi', 'oo', 'ou', 'ui'],
        c: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r',
            's', 't', 'v', 'w', 'x', 'y', 'z'],
        B: ['b', 'bl', 'br', 'c', 'ch', 'chr', 'cl', 'cr', 'd', 'dr', 'f', 'g',
            'h', 'j', 'k', 'l', 'll', 'm', 'n', 'p', 'ph', 'qu', 'r', 'rh', 's',
            'sch', 'sh', 'sl', 'sm', 'sn', 'st', 'str', 'sw', 't', 'th', 'thr',
            'tr', 'v', 'w', 'wh', 'y', 'z', 'zh'],
        C: ['b', 'c', 'ch', 'ck', 'd', 'f', 'g', 'gh', 'h', 'k', 'l', 'ld', 'll',
            'lt', 'm', 'n', 'nd', 'nn', 'nt', 'p', 'ph', 'q', 'r', 'rd', 'rr',
            'rt', 's', 'sh', 'ss', 'st', 't', 'th', 'v', 'w', 'y', 'z'],
        i: ['air', 'ankle', 'ball', 'beef', 'bone', 'bum', 'bumble', 'bump',
            'cheese', 'clod', 'clot', 'clown', 'corn', 'dip', 'dolt', 'doof',
            'dork', 'dumb', 'face', 'finger', 'foot', 'fumble', 'goof',
            'grumble', 'head', 'knock', 'knocker', 'knuckle', 'loaf', 'lump',
            'lunk', 'meat', 'muck', 'munch', 'nit', 'numb', 'pin', 'puff',
            'skull', 'snark', 'sneeze', 'thimble', 'twerp', 'twit', 'wad',
            'wimp', 'wipe'],
        m: ['baby', 'booble', 'bunker', 'cuddle', 'cuddly', 'cutie', 'doodle',
            'foofie', 'gooble', 'honey', 'kissie', 'lover', 'lovey', 'moofie',
            'mooglie', 'moopie', 'moopsie', 'nookum', 'poochie', 'poof',
            'poofie', 'pookie', 'schmoopie', 'schnoogle', 'schnookie',
            'schnookum', 'smooch', 'smoochie', 'smoosh', 'snoogle', 'snoogy',
            'snookie', 'snookum', 'snuggy', 'sweetie', 'woogle', 'woogy',
            'wookie', 'wookum', 'wuddle', 'wuddly', 'wuggy', 'wunny'],
        M: ['boo', 'bunch', 'bunny', 'cake', 'cakes', 'cute', 'darling',
            'dumpling', 'dumplings', 'face', 'foof', 'goo', 'head', 'kin',
            'kins', 'lips', 'love', 'mush', 'pie', 'poo', 'pooh', 'pook', 'pums'],
        D: ['b', 'bl', 'br', 'cl', 'd', 'f', 'fl', 'fr', 'g', 'gh', 'gl', 'gr',
            'h', 'j', 'k', 'kl', 'm', 'n', 'p', 'th', 'w'],
        d: ['elch', 'idiot', 'ob', 'og', 'ok', 'olph', 'olt', 'omph', 'ong',
            'onk', 'oo', 'oob', 'oof', 'oog', 'ook', 'ooz', 'org', 'ork', 'orm',
            'oron', 'ub', 'uck', 'ug', 'ulf', 'ult', 'um', 'umb', 'ump', 'umph',
            'un', 'unb', 'ung', 'unk', 'unph', 'unt', 'uzz']
    };
    var Wrappers;
    (function (Wrappers) {
        Wrappers[Wrappers["capitalizer"] = 0] = "capitalizer";
        Wrappers[Wrappers["reverser"] = 1] = "reverser";
    })(Wrappers || (Wrappers = {}));
    var GroupTypes;
    (function (GroupTypes) {
        GroupTypes[GroupTypes["symbol"] = 0] = "symbol";
        GroupTypes[GroupTypes["literal"] = 1] = "literal";
    })(GroupTypes || (GroupTypes = {}));
    var Group = /** @class */ (function () {
        function Group(type) {
            this.wrappers = [];
            this.set = [];
            this.type = type;
        }
        Group.prototype.produce = function () {
            switch (this.set.length) {
                case 0:
                    return new Literal('');
                case 1:
                    return this.set[0];
                default:
                    return new Random(this.set);
            }
            return;
        };
        Group.prototype.split = function () {
            if (this.set.length == 0) {
                this.set.push(new Sequence([]));
            }
            this.set.push(new Sequence([]));
        };
        Group.prototype.wrap = function (type) {
            this.wrappers.push(type);
        };
        Group.prototype.add = function (a) {
            if ((typeof a) === 'object') {
                var g_1 = a;
                while (this.wrappers.length > 0) {
                    switch (this.wrappers.pop()) {
                        case Wrappers.reverser:
                            g_1 = new Reverser(g_1);
                            break;
                        case Wrappers.capitalizer:
                            g_1 = new Capitalizer(g_1);
                            break;
                    }
                }
                if (this.set.length == 0) {
                    this.set.push(new Sequence([]));
                }
                this.set[this.set.length - 1].add(g_1);
                return;
            }
            var chr = a;
            var g = new Random([]);
            g.add(new Literal(chr));
            this.add(g);
        };
        return Group;
    }());
    var GroupSymbol = /** @class */ (function (_super) {
        __extends(GroupSymbol, _super);
        function GroupSymbol() {
            return _super.call(this, GroupTypes.symbol) || this;
        }
        GroupSymbol.prototype.add = function (a) {
            var g = new Random([]);
            var symbols = symbolMap[a];
            if (symbols) {
                for (var key in symbols) {
                    g.add(new Literal(symbols[key]));
                }
            }
            else {
                g.add(new Literal(a));
            }
            _super.prototype.add.call(this, g);
        };
        return GroupSymbol;
    }(Group));
    var GroupLiteral = /** @class */ (function (_super) {
        __extends(GroupLiteral, _super);
        function GroupLiteral() {
            return _super.call(this, GroupTypes.literal) || this;
        }
        return GroupLiteral;
    }(Group));
    var Generator = /** @class */ (function () {
        function Generator(pattern, collapse_triples) {
            if (pattern === void 0) { pattern = null; }
            if (collapse_triples === void 0) { collapse_triples = true; }
            this.generators = [];
            if ((typeof pattern) === 'object') {
                this.generators = pattern;
                return;
            }
            var last;
            var stack = [];
            var top = new GroupSymbol();
            var patternStr = pattern;
            for (var i = 0; i < patternStr.length; i++) {
                var chr = patternStr[i];
                switch (chr) {
                    case '<':
                        stack.push(top);
                        top = new GroupSymbol();
                        break;
                    case '(':
                        stack.push(top);
                        top = new GroupLiteral();
                        break;
                    case '>':
                    case ')':
                        if (stack.length == 0) {
                            throw new Error('Unbalanced brackets');
                        }
                        else if (chr === '>' && top.type != GroupTypes.symbol) {
                            throw new Error('Unexpected \'>\' in pattern');
                        }
                        else if (chr === ')' && top.type != GroupTypes.literal) {
                            throw new Error('Unexpected \')\' in pattern');
                        }
                        last = top.produce();
                        top = stack.pop();
                        top.add(last);
                        break;
                    case '|':
                        top.split();
                        break;
                    case '!':
                        if (top.type == GroupTypes.symbol) {
                            top.wrap(Wrappers.capitalizer);
                        }
                        else {
                            top.add(chr);
                        }
                        break;
                    case '~':
                        if (top.type == GroupTypes.symbol) {
                            top.wrap(Wrappers.reverser);
                        }
                        else {
                            top.add(chr);
                        }
                        break;
                    default:
                        top.add(chr);
                        break;
                }
            }
            if (stack.length != 0) {
                throw new Error('Missing closing brackets');
            }
            var g = top.produce();
            if (collapse_triples) {
                g = new Collapser(g);
            }
            this.add(g);
        }
        Generator.prototype.combinations = function () {
            var total = 1;
            this.generators.forEach(function (g, i, a) {
                total *= g.combinations();
            });
            return total;
        };
        Generator.prototype.min = function () {
            var final = 0;
            this.generators.forEach(function (g, i, a) {
                final += g.min();
            });
            return final;
        };
        Generator.prototype.max = function () {
            var final = 0;
            this.generators.forEach(function (g, i, a) {
                final += g.max();
            });
            return final;
        };
        Generator.prototype.toString = function () {
            var str = '';
            this.generators.forEach(function (g, i, a) {
                str += g.toString();
            });
            return str;
        };
        Generator.prototype.add = function (g) {
            this.generators.push(g);
        };
        return Generator;
    }());
    NameGen.Generator = Generator;
    var Random = /** @class */ (function (_super) {
        __extends(Random, _super);
        function Random(generators) {
            return _super.call(this, generators) || this;
        }
        Random.prototype.combinations = function () {
            var total = 0;
            this.generators.forEach(function (g, i, a) {
                total += g.combinations();
            });
            return total ? total : 1;
        };
        Random.prototype.min = function () {
            var final = -1;
            this.generators.forEach(function (g, i, a) {
                var curr = g.min();
                if (curr < final) {
                    final = curr;
                }
            });
            return final;
        };
        Random.prototype.max = function () {
            var final = 0;
            this.generators.forEach(function (g, i, a) {
                var curr = g.max();
                if (curr > final) {
                    final = curr;
                }
            });
            return final;
        };
        Random.prototype.toString = function () {
            if (!this.generators) {
                return '';
            }
            var rnd = Math.floor(Math.random() * this.generators.length);
            return this.generators[rnd].toString();
        };
        return Random;
    }(Generator));
    var Sequence = /** @class */ (function (_super) {
        __extends(Sequence, _super);
        function Sequence(generators) {
            return _super.call(this, generators) || this;
        }
        return Sequence;
    }(Generator));
    var Literal = /** @class */ (function (_super) {
        __extends(Literal, _super);
        function Literal(value) {
            var _this = _super.call(this) || this;
            _this.value = value;
            return _this;
        }
        Literal.prototype.combinations = function () {
            return 1;
        };
        Literal.prototype.min = function () {
            return this.value.length;
        };
        Literal.prototype.max = function () {
            return this.value.length;
        };
        Literal.prototype.toString = function () {
            return this.value;
        };
        return Literal;
    }(Generator));
    var Reverser = /** @class */ (function (_super) {
        __extends(Reverser, _super);
        function Reverser(generator) {
            return _super.call(this, [generator]) || this;
        }
        Reverser.prototype.toString = function () {
            return _super.prototype.toString.call(this).split('').reverse().join('');
        };
        return Reverser;
    }(Generator));
    var Capitalizer = /** @class */ (function (_super) {
        __extends(Capitalizer, _super);
        function Capitalizer(generator) {
            return _super.call(this, [generator]) || this;
        }
        Capitalizer.prototype.toString = function () {
            var str = _super.prototype.toString.call(this);
            if (!str)
                return '';
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        };
        return Capitalizer;
    }(Generator));
    var Collapser = /** @class */ (function (_super) {
        __extends(Collapser, _super);
        function Collapser(generator) {
            return _super.call(this, [generator]) || this;
        }
        Collapser.prototype.toString = function () {
            var str = _super.prototype.toString.call(this);
            var out = '';
            var cnt = 0;
            var pch = '';
            for (var i = 0; i < str.length; i++) {
                var chr = str[i];
                if (chr === pch) {
                    cnt++;
                }
                else {
                    cnt = 0;
                }
                var mch = 2;
                switch (chr) {
                    case 'a':
                    case 'h':
                    case 'i':
                    case 'j':
                    case 'q':
                    case 'u':
                    case 'v':
                    case 'w':
                    case 'x':
                    case 'y':
                        mch = 1;
                }
                if (cnt < mch) {
                    out += chr;
                }
                pch = chr;
            }
            return out;
        };
        return Collapser;
    }(Generator));
})(NameGen || (NameGen = {}));
function getNameGen() {
    return NameGen;
}
exports.default = getNameGen;
