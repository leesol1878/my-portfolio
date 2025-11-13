export const Intro = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center"
      >
        <div>
          <h1 className="text-5xl font-bold text-primary mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-foreground/70 text-lg">
            I'm Tsion Solomon — a passionate developer crafting creative digital
            solutions.
          </p>
        </div>
      </section>
    </>
  );
};

export const Other = ({ variable, anothervariable }) => {
  return <>other text</>;
};

export const Test = () => {
  return <>test text</>;
};
