import excitedkids from "../Images/excited kids.png";
import grandma from "../Images/gradnma.png";
import beach from "../Images/beach.png";
import castle from "../Images/castle.png";
import dirtypark from "../Images/dirtypark.png";
import kidscircle from "../Images/kidscircle.png";
import tree from "../Images/tree.png";
import trees from "../Images/trees.png";
import kidshideandseek from "../Images/kidshideandseek.png";
import bastian from "../Images/bastian.png";
import kidsWater from "../Images/kidswater.png";
import raisedHand from "../Images/raised_hand.jpg";
import dirtyRiver from "../Images/dirty_river.jpg";
import riverCleaning from "../Images/river_cleaning.jpg";
import happyGrandma from "../Images/happy_grandma.png";
//import cleanPark from "../Images/kidsparkplace.png";
import recycling from "../Images/recycling.png";
import kidsWalking from "../Images/kids_walking.png";
import trashpark from "../Images/trashpark.png";
import microplasticbag from "../Images/microplasticbag.png";
import plastic from "../Images/plastic.jpg";
import singleuse from "../Images/single-use.jpg";
import balls from "../Images/balls.jpg";
import brush from "../Images/brush.jpg";
import bottlebeach from "../Images/bottlebeach.jpg";
import ocean from "../Images/ocean.jpg";
import microplastic from "../Images/microplastic.jpg";
import plasticocean from "../Images/plasticocean.jpg";
import micro from "../Images/micro.jpg";
import turtle from "../Images/turtle.jpg";
import yoghurt from "../Images/yoghurt.png";
import yoghurtglass from "../Images/yoghurtglass.png";
import plasticbottle from "../Images/plasticbottle.png";
import refillablebottle from "../Images/refillablebottle.png";
import juicepack from "../Images/juice_pack.png";
import juiceglass from "../Images/juice_glass.png";
import plasticstraw from "../Images/plasticstraw.png";
import glasstraw from "../Images/glasstraw.png";
import apple from "../Images/apple.png";
import applewrapped from "../Images/applewrapped.png";
import pastastraw from "../Images/pastastraw.jpeg";
import pressedjuice from "../Images/pressedjuice.png";
import homemadeyoghurt from "../Images/homemadeyoghurt.png";
import refill from "../Images/refill.png";
import applebox from "../Images/applebox.png";
import fishPlastic from "../Images/fish_plastic.png";
//import sorting from "../Images/sorting.png";

const story = [
  {
    page: 1,
    type: "intro",
  },
  {
    page: 2,
    type: "select",
  },
  {
    page: 3,
    type: "chapter",
    title: "Ein Nachmittag im Park",
    chapter_number: "1",
    sub_chapter_number: "1",
    content: [
      {
        type: "image",
        image: excitedkids,
      },
      {
        type: "paragraph",
        text: "Es ist ein sonniger und warmer Freitagnachmittag und <character> ist sehr gl??cklich. Es ist <sein/ihr> Lieblingstag der Woche, denn heute geht es mit Oma auf den Spielpatz. Wie immer wartet Oma Ania auf dem Schulhof, um <ihn/sie> und die Freunde zu begleiten.",
      },
      {
        type: "paragraph",
        text: "Oma Ania begr????t <character> mit einer Umarmung und freut sich, dass noch ein paar Freunde mitkommen. Gemeinsam laufen sie zum Park.",
      },
      {
        type: "image",
        image: grandma,
      },
      {
        type: "paragraph",
        text: "Als sie im Park ankommen, rennen <character> und <seine/ihre> Freunde zum Spielplatz, um gemeinsam zu spielen. Oma Ania sieht ihnen mit einem L??cheln im Gesicht hinterher.",
      },
      {
        type: "image",
        image: kidshideandseek,
      },
      {
        type: "paragraph",
        text: 'Nach ein paar Minuten des Spielens im Gras und um die B??ume herum, kommt <character> zur??ck zu Oma Ania und sie kann auf <seinem/ihrem> Gesicht sehen, dass etwas nicht stimmt und fragt: "Hey, <character>, was ist denn passiert?"',
      },
      {
        type: "paragraph",
        text: '<character> antwortet: "Wir haben dort im Geb??sch gespielt, aber dort ist alles voll mit Plastikm??ll und anderen Dingen, die wir zu Hause in den M??ll werfen. Einige Leute haben sogar ihre leeren Wasserflaschen dorthin geworfen".',
      },
      {
        type: "image",
        image: dirtypark,
      },
      {
        type: "paragraph",
        text: 'Sie legt ihre Hand auf <character>s Schulter und sagt: "Du hast recht, hier ist es heute nicht so sch??n zum Spielen. Es scheint mit jeder Woche schlimmer zu werden. Hol doch mal deine Freunde her und ich erz??hle euch eine Geschichte."',
      },

      {
        type: "paragraph",
        text: 'Sie holt tief Luft und beginnt: "Wisst ihr Kinder, als ich in eurem Alter war, habe ich auch hier in der Gegend gewohnt." Sie zeigt auf ein Haus ein St??ck weiter die Stra??e hinunter.',
      },
      {
        type: "paragraph",
        text: '"Das war das Haus meiner Eltern. Ich kam immer hierher, um zu spielen, genau wie ihr. Damals gab es hier nur eine Schaukel, aber wir sind trotzdem oft hier gewesen. Ich erinnere mich sogar an einige der B??ume, die hier noch stehen."',
      },
      {
        type: "image",
        image: tree,
      },
      {
        type: "paragraph",
        text: '<character> fragt sie:"Wow, ist es wahr, dass B??ume so lange leben k??nnen?". Die ??ltere Dame antwortet mit einem L??cheln: "Oh, nat??rlich, sie sind viel ??lter als ich und sie werden noch viele Jahre leben. Das hei??t, wenn wir uns um sie k??mmern. So wie der Park heute ist, bin ich mir nicht sicher, ob die Leute wirklich erkennen, wie wichtig das ist."',
      },
      {
        type: "image",
        image: trees,
      },
      {
        type: "paragraph",
        text: '<character> und <seine/ihre> Freunde gehen zur??ck auf den Spielplatz und <character> sagt: "Meine Oma ist jetzt wirklich traurig, wir m??ssen uns was ??berlegen, wie wir sie aufheitern k??nnen."',
      },
      {
        type: "image",
        image: kidscircle,
      },
      {
        type: "paragraph",
        text: "Darauf einigen sie sich und gehen zur??ck zu Ania. Sie machen sich gemeinsam auf den Heimweg und hoffen, dass sie eine L??sung finden, um Ania wieder gl??cklich zu machen.",
      },
    ],
  },
  {
    page: 4,
    type: "chapter",
    title: "Ein Tag am Strand",
    chapter_number: "2",
    sub_chapter_number: "1",
    content: [
      {
        type: "paragraph",
        text: "<character> steht heute fr??h am Morgen auf, denn heute ist es sonnig und <er/sie> f??hrt mit <seiner/ihrer> Familie an den Strand.",
      },
      {
        type: "image",
        image: beach,
      },
      {
        type: "paragraph",
        text: "Nach drei??ig Minuten Fahrt kommen sie am Strand an und treffen dort auf ihre Freunde Sam und William, die ebenfalls mit ihren Eltern dort sind. Sie fangen an, am Strand zu spielen und bauen eine gro??e Burg aus Sand.",
      },
      {
        type: "image",
        image: castle,
      },
      {
        type: "paragraph",
        text: 'Sam bemerkt etwas: "Seht mal, da dr??ben, neben dem gro??en Felsen, schwimmt etwas Seltsames im Wasser." Sie sehen, dass viele Wasserflaschen an der Oberfl??che schwimmen. Au??erdem hat sich ein kleiner Fisch im M??ll verfangen und versucht kleine Plastikteile zu fressen.',
      },
      {
        type: "paragraph",
        text: 'William sagt:"<character>, wir m??ssen ihn befreien und er darf das nicht essen! Es ist kein Essen und ist bestimmt gef??hrlich f??r ihn."',
      },
      {
        type: "image",
        image: fishPlastic,
      },
    ],
  },
  {
    page: 5,
    type: "game",
    name: "Whack-a-bottle",
  },
  {
    page: 6,
    type: "chapter",
    title: "Ein Tag am Strand",
    chapter_number: "2",
    sub_chapter_number: "2",
    content: [
      {
        type: "paragraph",
        text: 'Der Fisch sagt erleichtert: "Vielen Dank, dass ihr mich gerettet habt." Die Kinder setzen sich neben das Wasser und <character> antwortet: "Gern geschehen, Herr Fisch, aber warum wolltest du das Plastik zu essen?"',
      },
      {
        type: "paragraph",
        text: 'Der Fisch schwimmt ein wenig herum und sagt dann: "Oh, ihr k??nnt mich <companion> nennen, jetzt, wo ihr mich gerettet habt, seid ihr meine Freunde. Wisst ihr, f??r mich ist es im Wasser nicht immer einfach, den Unterschied zwischen Nahrung und diesen kleinen Plastikst??cken zu erkennen. Ich habe gesehen, wie viele meiner Familie und Freunde diese kleinen St??cke gegessen haben und richtig krank wurden."',
      },
      {
        type: "image",
        image: bastian,
      },
      {
        type: "paragraph",
        text: "<companion> ist ein wirklich kluges Tier und er erz??hlt den Kindern viel ??ber die Probleme, die die Plastikverschmutzung dem Meer und seinen Lebewesen bringt.",
      },
    ],
  },
  {
    page: 7,
    type: "lesson",
    title: "Was ist Plastik?",
    content: [
      {
        type: "image",
        image: trashpark,
      },
      {
        type: "text",
        text: "Schauen wir uns den M??ll an, den die Kinder im Park gefunden haben. Vieles davon sieht aus wie Plastik. Aber was ist Plastik eigentlich? Das findest du im Video.",
      },
      {
        type: "video",
        link: "https://www.youtube.com/embed/Wpzn1e6pLlc",
      },
    ],
  },
  {
    page: 8,
    type: "quiz",
    content: [
      {
        id: 1,
        img: plastic,
        question: "Aus was wird Plastik hergestellt?",
        answerOptions: [
          { answer: "Pflanzen", id: 1, isCorrect: false },
          { answer: "Zerkleinerter Stein und Leim", id: 2, isCorrect: false },
          { answer: "??l, Kohle, Gas und Chemikalien", id: 3, isCorrect: true },
          { answer: "Wasser", id: 4, isCorrect: false },
        ],
        explanation:
          "Plastik ist ein Kunststoff und wird von Menschen in fast jeder Form hergestellt.",
      },
      {
        id: 2,
        img: singleuse,
        question: "Was ist Einwegplastik??",
        answerOptions: [
          {
            answer: "Gegenst??nde, die nur eine Person nutzt",
            id: 1,
            isCorrect: false,
          },

          {
            answer: "Gegenst??nde, die immer wieder verwendet werden k??nnen",
            id: 3,
            isCorrect: false,
          },

          {
            answer: "Gegenst??nde, die von Tieren benutzt werden",
            id: 4,
            isCorrect: false,
          },
          {
            answer:
              "Gegenst??nde, die einmal benutzt und dann weggeworfen werden",
            id: 2,
            isCorrect: true,
          },
        ],
        explanation:
          "Einwegplastik ist jede Art von Plastikwerkzeug, das wir einmal benutzen und dann wegwerfen, wie Plastikstrohhalme, Wasserflaschen und Plastikt??ten",
      },
      {
        id: 3,
        img: brush,
        question: "Welches ist KEIN Einwegplastikartikel?",
        answerOptions: [
          { answer: "Shampoo Flasche", id: 1, isCorrect: false },
          { answer: "Strohhalm", id: 2, isCorrect: false },
          { answer: "Lego Baustein", id: 3, isCorrect: true },
          { answer: "Eine Chips-Packung", id: 4, isCorrect: false },
        ],
        explanation:
          "Auch wenn Lego-Artikel aus Plastik sind, kann man mit ihnen viele Male spielen",
      },
      {
        id: 4,
        img: balls,
        question: "Was ist nicht aus Plastik?",
        answerOptions: [
          { answer: "Kaugummi", id: 1, isCorrect: false },
          { answer: "Kochl??ffel aus Holz", id: 2, isCorrect: true },
          { answer: "Shampoo", id: 3, isCorrect: false },
          { answer: "Feuchtt??cher", id: 4, isCorrect: false },
        ],
        explanation:
          "Der Kochl??ffel aus Holz ist in der Regel aus nat??rlichem Holz und enth??lt keinen Kunststoff.",
      },
      {
        id: 5,
        img: bottlebeach,
        question:
          "Was passiert mit einer Plastikflasche, wenn man sie im Boden vergr??bt?",
        answerOptions: [
          { answer: "Sie verwandelt sich in Stein", id: 1, isCorrect: false },
          {
            answer: "Sie zerf??llt in winzige St??cke, verschwindet aber nicht.",
            id: 4,
            isCorrect: true,
          },
          {
            answer: "Sie zerf??llt in winziger St??cke und verschwindet",
            id: 2,
            isCorrect: false,
          },
          { answer: "Sie kommt wieder hoch", id: 3, isCorrect: false },
        ],
        explanation:
          "Plastik kann nicht in kleinere Produkte zerlegt werden. Stattdessen zerf??llt es in winzige St??cke und verschwindet nicht.",
      },
    ],
  },
  {
    page: 9,
    type: "chapter",
    title: "Ein Tag am Strand",
    chapter_number: "2",
    sub_chapter_number: "3",
    content: [
      {
        type: "image",
        image: kidsWater,
      },
      {
        type: "paragraph",
        text: 'Am Ende des Tages, bevor sie nach Hause gehen m??ssen, sagt <companion> zu ihnen: "Ihr seid jetzt meine Freunde. Wenn ihr mich jemals braucht und in der N??he von Wasser seid, ruft einfach meinen Namen!"',
      },
      {
        type: "trigger",
        name: "companion",
      },
    ],
  },
  {
    page: 10,
    type: "chapter",
    title: "Zur??ck zur Schule",
    chapter_number: "3",
    sub_chapter_number: "1",
    content: [
      {
        type: "image",
        image: raisedHand,
      },
      {},
      {
        type: "paragraph",
        text: 'Am Montag ist es Zeit, wieder in die Schule zu gehen. <character> erz??hlt von seinem Wochenende: "Frau Miller, wir waren auf dem Spielplatz und er war voller M??ll und das Wasser am Strand auch. Das macht mich wirklich traurig."',
      },
      {
        type: "paragraph",
        text: 'Frau Miller sieht <ihn/sie> mit viel Mitgef??hl an und antwortet: "Das verstehe ich, <character>. Wir k??nnen heute die normale Stunde ??berspringen und ??ber Umweltverschmutzung sprechen."',
      },
    ],
  },
  {
    page: 11,
    type: "lesson",
    title: "Was ist Mikroplastik?",
    content: [
      {
        type: "image",
        image: microplasticbag,
      },
      {
        type: "text",
        text: "Jetzt erf??hrst du, wie sch??dlich Plastik sein kann und was es f??r uns bedeuetet",
      },
      {
        type: "video",
        link: "https://www.youtube.com/embed/NjGdeeCVa9c",
      },
    ],
  },
  {
    page: 12,
    type: "quiz",
    content: [
      {
        id: 10,
        img: ocean,
        question: "Warum ist das Meer so wichtig f??r uns Menschen?",
        answerOptions: [
          {
            answer: "Weil es uns mit Nahrung, Pflanzen und Sauerstoff versorgt",
            id: 4,
            isCorrect: true,
          },
          { answer: "Weil es sch??n aussieht", id: 1, isCorrect: false },
          {
            answer: "Weil es frisches Wasser produziert",
            id: 2,
            isCorrect: false,
          },
          { answer: "Weil man darin schwimmen kann", id: 3, isCorrect: false },
        ],
        explanation:
          "Die Meere sind eine wichtige Nahrungsquelle f??r Menschen auf der ganzen Welt. Es liefert auch Mineralien, ??l und Erdgas und erzeugt einen Gro??teil des weltweiten Sauerstoffs.",
      },
      {
        id: 11,
        img: plasticocean,
        question: "Was passiert mit Plastikm??ll, wenn er ins Meer gelangt?",
        answerOptions: [
          {
            answer: "Er sinkt auf den Grund und wird unter dem Sand begraben",
            id: 1,
            isCorrect: false,
          },
          { answer: "Er zerf??llt und verschwindet", id: 2, isCorrect: false },
          {
            answer: "Er l??st sich auf und zersetzt sich im Wasser",
            id: 3,
            isCorrect: false,
          },
          {
            answer: "Er zerf??llt in immer kleinere Teile",
            id: 4,
            isCorrect: true,
          },
        ],
        explanation:
          "Plastik kann nicht in kleinere Produkte zerlegt werden. Stattdessen zerf??llt es in winzige St??cke und verschwindet nicht.",
      },
      {
        id: 12,
        img: microplastic,
        question: "Was ist Mikroplastik?",
        answerOptions: [
          {
            answer:
              "Weiches Plastik, das entsteht, wenn man hartes Plastik in der Mikrowelle schmilzt",
            id: 1,
            isCorrect: false,
          },
          {
            answer:
              "Plastikteilchen, die so klein sind, dass man sie nur unter dem Mikroskop sehen kann",
            id: 2,
            isCorrect: false,
          },
          {
            answer:
              "Kunststoffpartikel, die eine Gr????e zwischen einem und f??nf Millimetern haben",
            id: 4,
            isCorrect: true,
          },
          {
            answer: "Plastik, das man nur im Wasser sehen kann",
            id: 3,
            isCorrect: false,
          },
        ],
        explanation:
          "Mikroplastik besteht aus winzigen Kunststoffteilchen, die mit dem Auge kaum zu erkennen sind. Sie entstehen, wenn sich gr????ere Kunststoffteile zersetzen.",
      },
      {
        id: 13,
        img: turtle,
        question: "Warum fressen Wale und andere Meerestiere Plastikt??ten?",
        answerOptions: [
          { answer: "Weil sie gut schmecken", id: 1, isCorrect: false },
          {
            answer: "Sie verwechseln es mit Essen",
            id: 4,
            isCorrect: true,
          },
          {
            answer: "Weil sie dann nicht jagen gehen m??ssen",
            id: 2,
            isCorrect: false,
          },
          {
            answer: "Weil sie unter Wasser nicht gut sehen k??nnen",
            id: 3,
            isCorrect: false,
          },
        ],
        explanation:
          "Tiere fressen Plastik, weil es ihrer ??blichen Beute ??hnlich sieht. Da auf Plastik Algen wachsen, lockt der Geruch Tiere an, die sich davon ern??hren.",
      },
      {
        id: 14,
        img: micro,
        question: "Was passiert, wenn Tiere Mikroplastik fressen??",
        answerOptions: [
          { answer: "Sie werden noch hungriger", id: 1, isCorrect: false },
          { answer: "Sie k??nnen schneller schwimmen", id: 2, isCorrect: false },
          { answer: "Sie k??nnen damit tauchen", id: 3, isCorrect: false },
          {
            answer: "Sie bekommen Bauchschmerzen",
            id: 4,
            isCorrect: true,
          },
        ],
        explanation:
          "Wenn z.B. Schildkr??ten Plastik fressen, kann es ihr Darmsystem (ihre Eingeweide) verstopfen. Daher k??nnen sie nicht mehr richtig fressen, was zum Tod f??hren kann.",
      },
      {
        id: 15,
        img: bottlebeach,
        question: "Wie gelangt Plastik ins Meer?",
        answerOptions: [
          { answer: "Flugzeuge lassen es fallen", id: 1, isCorrect: false },
          { answer: "Die Meerestiere suchen danach", id: 2, isCorrect: false },
          { answer: "Es bildet sich am Meeresgrund", id: 3, isCorrect: false },
          {
            answer: "??ber die Fl??sse",
            id: 4,
            isCorrect: true,
          },
        ],
        explanation:
          "Sachen zum Waschen wie Duschgel oder Shampoo sowie Kosmetikprodukte enthalten Mikroplastik. ??ber das Abwasser gelangen die winzigen Plastikk??gelchen ins Meer.",
      },
    ],
  },
  {
    page: 13,
    type: "chapter",
    title: "Zur??ck zur Schule",
    chapter_number: "3",
    sub_chapter_number: "2",
    content: [
      {
        type: "paragraph",
        text: '<character> meldet sich: "Ich habe eine Idee. Ich schaffe das aber nicht alleine. K??nnt ihr mir nach der Schule helfen, den Spielplatz zu s??ubern?"',
      },
      {
        type: "image",
        image: recycling,
      },
      {
        type: "paragraph",
        text: 'Die anderen Kinder sind begeistert und Frau Miller f??gt hinzu: "Ich werde auf jeden Fall dabei sein <character>, ich bin stolz auf dich, dass du die Initiative ergriffen hast."',
      },
      {
        type: "image",
        image: excitedkids,
      },
    ],
  },
  {
    page: 14,
    type: "chapter",
    title: "Oma gl??cklich machen",
    chapter_number: "4",
    sub_chapter_number: "1",
    content: [
      {
        type: "image",
        image: kidsWalking,
      },
      {
        type: "paragraph",
        text: "Gemeinsam mit Fr. Miller geht die ganze Klasse nach dem Schultag in den Park.",
      },
      {
        type: "paragraph",
        text: "Der Park ist immer noch in einem schlechten Zustand.",
      },
      {
        type: "image",
        image: dirtypark,
      },
      //{type: "paragraph", text: '<character> wendet sich an <seine/ihre> die anderen: "Denkt daran, was wir ??ber Recycling gelernt haben, werft nicht alles in eine M??lltonne." <Er/Sie> zeigt auf die verschiedenen M??lltonnen.', },
      // {type: "image",image: sorting,},
    ],
  },
  // { page: 15, type: "game", name: "ParkGame",},
  {
    page: 16,
    type: "chapter",
    title: "Oma gl??cklich machen",
    chapter_number: "4",
    sub_chapter_number: "2",
    content: [
      {
        type: "paragraph",
        text: "Nach der gro??en Anstrengung, den Spielplatz zu s??ubern, sind alle ziemlich m??de von der ganzen Arbeit, aber <character> h??rt ein leises Ger??usch aus dem naheliegenden Fluss. <Er/Sie> ruft <seine/ihre> Freunde und sie laufen zum Fluss.",
      },
      {
        type: "image",
        image: dirtyRiver,
      },
      {
        type: "paragraph",
        text: '<companion> ist dort mit ein paar seiner tierischen Freunden, aber der Fluss ist voll mit Plastikflaschen und anderen Gegenst??nden. <character> sagt: "Kommt schon, wir m??ssen <companion> und seinen Freunden helfen. Es ist gut, einen sauberen Park f??r uns zu haben, aber alle Lebewesen brauchen einen sauberen Ort zum Leben und Spielen."',
      },
      {
        type: "paragraph",
        text: "Alle arbeiten gemeinsam hart daran, den M??ll im flachen Wasser aufzusammeln, damit das Plastik den Tieren nicht mehr schaden kann.",
      },
      {
        type: "image",
        image: riverCleaning,
      },
      // {
      //   type: "paragraph",
      //   text: "Nachdem auch der Fluss endlich sauber sind, geht <character> nach Hause, um sich auszuruhen. <Er/Sie> tr??umt von sauberen Spielpl??tzen und Fl??ssen, in denen <er/sie> mit <companion> und all <seinen/ihren> Freunden spielt.",
      // },
      // {
      //   type: "image",
      //   image: cleanPark,
      //},
      {
        type: "paragraph",
        text: 'Am n??chsten Tag, nach der Schule, geht <character> mit <seiner/ihrer> Gro??mutter in den Park. "Schau Oma! Schau, was wir gemacht haben." Ania schaut sich einen Moment um und sagt gl??cklich: "Das ist das beste Geschenk, das ich je bekommen habe. Es f??hlt sich genau wie in meiner Jugend an."',
      },
      {
        type: "image",
        image: happyGrandma,
      },
      {
        type: "paragraph",
        text: '"Jetzt m??ssen wir nur noch mehr B??ume pflanzen, hilfst du mir, <character>?" Voller Freude ??ber <seine/ihre> Leistungen antwortet <character>: "Nat??rlich Oma!".',
      },
      {
        type: "paragraph",
        text: "Das Ende",
      },
      {
        type: "image",
        image: trees,
      },
    ],
  },
  {
    page: 17,
    type: "choice",
    content: [
      {
        id: 1,
        options: [
          { id: 1, answer: plasticbottle, isCorrect: false },
          { id: 2, answer: refillablebottle, isCorrect: true },
        ],
        explanation:
          "Die wiederverwendbare Flasche kannst du immer wieder mit Wasser nachf??llen.",
        img: refill,
      },
      {
        id: 2,
        options: [
          { id: 1, answer: yoghurtglass, isCorrect: true },
          { id: 2, answer: yoghurt, isCorrect: false },
        ],
        explanation:
          "Warum machst du nicht mal deinen eigenen Joghurt? Du kannst ihn in ein Glas f??llen und deine Lieblingsfr??chte oder -m??sli dazugeben.",
        img: homemadeyoghurt,
      },
      {
        id: 3,
        options: [
          { id: 1, answer: juiceglass, isCorrect: true },
          { id: 2, answer: juicepack, isCorrect: false },
        ],
        explanation:
          "Warum presst du nicht mal deinen eigenen Saft aus leckeren Orangen?",
        img: pressedjuice,
      },
      {
        id: 4,
        options: [
          { id: 1, answer: plasticstraw, isCorrect: false },
          { id: 2, answer: glasstraw, isCorrect: true },
        ],
        explanation:
          "Anstelle eines Plastikstrohhalms kannst du auch Glashalme, Papierhalme oder andere Dinge verwenden. Profi-Tipp: Makkaronis",
        img: pastastraw,
      },

      {
        id: 5,
        options: [
          { id: 1, answer: applewrapped, isCorrect: false },
          { id: 2, answer: apple, isCorrect: true },
        ],
        explanation:
          "Fr??chte brauchen keine extra Verpackung. Nimm sie einfach ohne oder steck sie in eine Tupperdose",
        img: applebox,
      },
    ],
  },
  {
    page: 18,
    type: "lesson",
    title: "Jetzt bist du dran!",
    content: [
      {
        id: 7,
        type: "text",
        text: "Schaut euch an, was die Kinder in der Schule in Hamburg gemacht haben. Vielleicht f??llt dir was ein, was ihr zusammen in der Schule machen k??nnt oder schlie?? dich den Plastikpiraten an.",
      },
      {
        id: 8,
        type: "image",
        image:
          "https://bmbf-plastik.de/sites/default/files/2018-02/csm_Plastikpiraten1_4ef8a00d34.jpg",
      },
      {
        id: 9,
        type: "video",
        link: "https://www.youtube.com/embed/ry1rFCMqm4M",
      },
    ],
  },
  {
    type: "restart",
  },
];

export { story };
