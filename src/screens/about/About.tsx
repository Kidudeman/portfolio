import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const About = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <div className="flex h-auto w-full items-center overflow-hidden text-primaryColor">
      <div className="w-full xl:w-2/3">
        <span className="html-tag">{'<html>'}</span>
        <br />
        <span className="html-tag pl-4">{'<body>'}</span>
        <br />
        <span className="html-tag pl-8">{'<h1>'}</span>

        <h1 className="pb-2 pl-10 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">Hello,</h1>

        <span className="html-tag pl-8">{'</h1>'}</span>
        <br />
        <span className="html-tag pl-8">{'<p>'}</span>
        <p className="pb-4 pl-10 text-lg">
          My name is <span className="text-lg text-themePrimaryColor">Andrew Gong</span> and I am an {' '}
          <span className="text-lg text-themePrimaryColor">UNSW Student </span>
          with over 2 years of expertise in programming{' '}
          <span className="text-lg text-themePrimaryColor">C, C++, Javascript, Java, Python, HTML, CSS.</span>
        </p>
        <p className="pb-4 pl-10 text-lg">
          I am currently completing{' '}
          <span className="text-lg text-themePrimaryColor">
            Computer Science/Fine Arts (Animation and Moving Image)
          </span>
          {' '}
          at UNSW.
        </p>
        <p className="pb-4 pl-10 text-lg">
          I have experience in {' '}
          <span className="text-lg text-themePrimaryColor">
            Backend and Frontend web development 
          </span>{' '}
          and extensive knowledge in {' '}
          <span className="text-lg text-themePrimaryColor">
            algorithms and data structures.
          </span>{' '}
        </p>
        <span className="html-tag pl-8">{'</p>'}</span>
        <br />
        <span className="html-tag pl-4">{'</body>'}</span>
        <br />
        <span className="html-tag pl-2">{'</html>'}</span>
        {mobileAndTablet && (
          <div className="m-auto h-[200px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[500px]"></div>
        )}
      </div>
      {!mobileAndTablet && <div className="h-[300px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[400px]"></div>}
    </div>
  );
};

export default About;
