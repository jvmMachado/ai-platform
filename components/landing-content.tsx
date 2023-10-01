'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Software Engineer',
    quote: 'I love this app!',
  },
  {
    name: 'George',
    avatar: 'G',
    title: 'Content Manager',
    quote: 'Makes my work a lot easier ❤️',
  },
  {
    name: 'Alice',
    avatar: 'A',
    title: 'YouTuber',
    quote: 'My channel is growing so fast! 🚀',
  },
  {
    name: 'Julia',
    avatar: 'J',
    title: 'Entrepreneur',
    quote: 'My business is booming! 💰',
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.quote}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.quote}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
