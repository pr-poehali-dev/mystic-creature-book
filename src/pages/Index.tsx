import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Creature {
  id: string;
  name: string;
  century: string;
  centuryRoman: string;
  description: string;
  origin: string;
  danger: string;
}

const creatures: Creature[] = [
  {
    id: 'dolgov-ezh',
    name: 'Долговязый Ѣжъ',
    century: '10',
    centuryRoman: 'X',
    description: 'Чудовищное существо, являющее собою извращённый образъ лѣсного ежа. Долговязый Ѣжъ обладаетъ фіолетовыми иглами, что светятся въ сумерках зловѣщимъ сіяніемъ. Стоитъ онъ на заднихъ лапахъ, подобно человѣку, и ростомъ своимъ превосходитъ любого витязя.',
    origin: 'Болота и дремучіе лѣса Новгородской земли. Говорятъ, що порожденъ онъ проклятіемъ древнихъ волхвовъ, наложеннымъ на невиннаго ежа за то, что тотъ не уступилъ дорогу колдуну.',
    danger: 'Долговязый Ѣжъ заманиваетъ путниковъ въ болото или густой лѣсъ тихимъ посвистываніемъ, похожимъ на пѣніе птицъ. Завлечённые звукомъ странники теряютъ дорогу и блуждаютъ до самой смерти. Длинныя конечности позволяютъ ему преслѣдовать жертву часами, не уставая.'
  },
  {
    id: 'krichashchij-svistun',
    name: 'Кричащій Свистунъ',
    century: '10',
    centuryRoman: 'X',
    description: 'Существо въ обличьи молодого парня съ жуткой улыбкой. Ротъ его полонъ мелкихъ острыхъ зубовъ, коихъ несметное множество, а глаза — козлиныя, съ горизонтальными зрачками. Обликомъ пригожъ, но душа его исполнена злобы нечеловѣческой.',
    origin: 'Явился изъ мѣста, гдѣ была совершена великая несправедливость — казнь невиннаго юноши по ложному обвиненію. Душа казнённаго не обрѣла покоя и возвратилась въ міръ живыхъ искажённой и полной мести.',
    danger: 'Кричащій Свистунъ не причиняетъ вреда тѣлесного, но губитъ разумъ. Свистъ его подобенъ крикамъ молодыхъ парней въ мукахъ. Услышавшіе его теряютъ рассудокъ и впадаютъ въ безуміе. Цѣлыя деревни сводилъ онъ съ ума, заставляя людей лишать себя жизни. Спасенія отъ него нѣтъ — лишь затычки въ ушахъ да молитва.'
  },
  {
    id: 'nochnaya-baba',
    name: 'Ночная Баба',
    century: '11',
    centuryRoman: 'XI',
    description: 'Призракъ старухи съ провалившимися глазницами и длинными сѣдыми волосами. Являетъ себя только въ безлунныя ночи. Одѣянія её — истлѣвшій саванъ, а дыханіе несётъ смердъ могилы.',
    origin: 'Возникла изъ душъ старухъ-знахарокъ, что были несправедливо казнены за колдовство. Обитаетъ близъ заброшенныхъ погостовъ и старыхъ церквей.',
    danger: 'Ночная Баба крадётъ младенцевъ изъ люлекъ и подмѣняетъ ихъ на лѣдяныя подобія. Тѣ, кто услышитъ её причитанія трижды, умираютъ въ теченіе луннаго мѣсяца.'
  },
  {
    id: 'krovopijca',
    name: 'Кровопíйца Печенѣжскій',
    century: '12',
    centuryRoman: 'XII',
    description: 'Оборотень, принимающій обличье волка съ человѣческими глазами. Шерсть его чёрна, какъ смола, а клыки остры, какъ булатъ. Размѣромъ превосходитъ обычнаго волка вдвое.',
    origin: 'Порождёнъ печенѣжскимъ шаманомъ для войны противъ русичей. Послѣ смерти создателя обрѣлъ свободу и сталъ охотиться на всѣхъ безъ разбора.',
    danger: 'Пьётъ кровь живыхъ существъ до послѣдней капли, оставляя лишь высохшія тѣла. Способенъ проникать въ дома черезъ малѣйшія щели. Убить его можетъ лишь серебро, освящённое въ Крещенскую ночь.'
  },
  {
    id: 'bolotnik',
    name: 'Болотникъ Трясучій',
    century: '13',
    centuryRoman: 'XIII',
    description: 'Существо изъ гніющей тины и корней. Тѣло его постоянно дрожитъ и источаетъ зловоніе. Лицо покрыто мхомъ, изъ котораго проглядываютъ мутныя глаза.',
    origin: 'Духъ утопленника, что не былъ погребёнъ по обряду. Души такихъ несчастныхъ срастаются съ болотной трясиной и обрѣтаютъ злобное сознаніе.',
    danger: 'Болотникъ Трясучій затягиваетъ въ трясину всякаго, кто ступитъ на его владѣнія. Жертва погружается медленно, испытывая ужасъ и удушье, пока болотная вода не заполнитъ лёгкія.'
  },
  {
    id: 'kostyanoj-pes',
    name: 'Костяной Псъ',
    century: '14',
    centuryRoman: 'XIV',
    description: 'Скелетъ пса, оживлённый тёмной магíей. Кости его бѣлы и полируются отъ времени. Въ пустыхъ глазницахъ горятъ красныя искры, а изъ пасти валитъ сѣрый дымъ.',
    origin: 'Создается чернокнижниками для охраны кладовъ и запретныхъ мѣстъ. Нѣкоторые изъ нихъ пережили своихъ хозяевъ и продолжаютъ бродить по землѣ.',
    danger: 'Костяной Псъ неутомимо преслѣдуетъ добычу. Его укусъ несётъ проклятіе — рана не заживаетъ и гніётъ, пока плоть не отдѣлится отъ костей. Не знаетъ пощады и не чувствуетъ боли.'
  },
  {
    id: 'ezhonok-maly',
    name: 'Ѣжонокъ Малый',
    century: '15',
    centuryRoman: 'XV',
    description: 'Малое дитя Долговязаго Ѣжа, едва достигшее размѣровъ обычнаго ежа. Иглы его также окрашены въ фіолетовый цвѣтъ, но свѣтятся слабо и нежно, подобно свѣтлячкамъ. Стоитъ на заднихъ лапкахъ неувѣренно, часто падая и кувыркаясь.',
    origin: 'Родился въ глухомъ болотѣ отъ Долговязаго Ѣжа. Говорятъ, что мать его была обычной ежихой, что заблудилась въ проклятыхъ мѣстахъ. Отпрыскъ получился добрымъ, въ отличіе отъ своего ужаснаго родителя.',
    danger: 'Ѣжонокъ Малый совершенно безобиденъ. Напротивъ, онъ любопытенъ и игривъ, какъ обычное лѣсное дитя. Фіолетовое сіяніе его иголокъ помогаетъ заблудившимся путникамъ найти дорогу изъ лѣса. Говорятъ, что онъ плачетъ по ночамъ, скучая по матери, которую никогда не видѣлъ.'
  }
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCentury, setSelectedCentury] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const centuries = Array.from(new Set(creatures.map(c => c.centuryRoman)));
  
  const filteredCreatures = selectedCentury 
    ? creatures.filter(c => c.centuryRoman === selectedCentury)
    : creatures;

  const handleNextPage = () => {
    if (currentPage < filteredCreatures.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handleCenturyClick = (century: string) => {
    setSelectedCentury(century === selectedCentury ? null : century);
    setCurrentPage(0);
  };

  const currentCreature = filteredCreatures[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] via-[#2a1810] to-[#1a0f0a] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="mb-8 flex gap-3 justify-center flex-wrap">
          {centuries.map((century) => (
            <button
              key={century}
              onClick={() => handleCenturyClick(century)}
              className={`px-6 py-3 border-2 transition-all duration-300 ${
                selectedCentury === century
                  ? 'bg-blood border-blood text-foreground shadow-lg shadow-blood/50'
                  : 'bg-secondary border-border text-muted-foreground hover:border-blood hover:text-foreground'
              }`}
            >
              <span className="text-lg font-bold tracking-wider">
                Вѣкъ {century}
              </span>
            </button>
          ))}
        </div>

        <div className="relative perspective-[2000px]">
          <div 
            className={`book-page page-texture rounded-lg shadow-2xl border-4 border-[#3a2820] p-12 transition-transform duration-500 ${
              isFlipping ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
            }`}
          >
            <div className="mb-8 pb-6 border-b-2 border-blood/30">
              <h1 className="text-5xl font-bold text-blood mb-2 tracking-wide">
                {currentCreature.name}
              </h1>
              <p className="text-muted-foreground text-lg">
                Вѣкъ {currentCreature.centuryRoman} • {currentCreature.century} столѣтіе
              </p>
            </div>

            <div className="space-y-6 text-foreground">
              <div>
                <h2 className="text-2xl font-bold text-blood mb-3 flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Описаніе
                </h2>
                <p className="text-lg leading-relaxed opacity-90">
                  {currentCreature.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blood mb-3 flex items-center gap-2">
                  <Icon name="MapPin" size={24} />
                  Происхожденіе
                </h2>
                <p className="text-lg leading-relaxed opacity-90">
                  {currentCreature.origin}
                </p>
              </div>

              <div className="bg-blood/10 border-2 border-blood/30 rounded p-6">
                <h2 className="text-2xl font-bold text-blood mb-3 flex items-center gap-2">
                  <Icon name="Skull" size={24} />
                  Опасность
                </h2>
                <p className="text-lg leading-relaxed opacity-90">
                  {currentCreature.danger}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-blood/30 flex justify-between items-center">
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 0 || isFlipping}
                variant="ghost"
                size="lg"
                className="text-foreground hover:text-blood hover:bg-blood/10 disabled:opacity-30"
              >
                <Icon name="ChevronLeft" size={32} />
                <span className="text-lg ml-2">Назадъ</span>
              </Button>

              <div className="text-muted-foreground text-lg">
                Страница {currentPage + 1} изъ {filteredCreatures.length}
              </div>

              <Button
                onClick={handleNextPage}
                disabled={currentPage === filteredCreatures.length - 1 || isFlipping}
                variant="ghost"
                size="lg"
                className="text-foreground hover:text-blood hover:bg-blood/10 disabled:opacity-30"
              >
                <span className="text-lg mr-2">Далѣе</span>
                <Icon name="ChevronRight" size={32} />
              </Button>
            </div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-blood text-foreground px-6 py-3 shadow-xl border-2 border-[#3a2820]">
              <h3 className="text-2xl font-bold tracking-wider">
                Тёмныя Сказы Руси
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>Книга древнихъ ужасовъ • Собраніе запретныхъ знаній</p>
        </div>
      </div>
    </div>
  );
};

export default Index;