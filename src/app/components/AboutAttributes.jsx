import AttIcon from './AttributesIcon';
import Drums from './svg/Drums';
import KarateBelt from './svg/KarateBelt';
import Football from './svg/Football';  
import Microphone from './svg/Microphone';
import Space from './svg/Space';

const AboutAttributes = () => {
  return(
    <div className="flex flex-row gap-8">
      <AttIcon name="Drums" svgSrc={<Drums />} />
      <AttIcon name="Black Belt" svgSrc={<KarateBelt />} />
      <AttIcon name="Football" svgSrc={<Football />} />
      <AttIcon name="Public Speaking" svgSrc={<Microphone />} />
      <AttIcon name="Space" svgSrc={<Space />} />
    </div>
  );
};

export default AboutAttributes;