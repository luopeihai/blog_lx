import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import styles from './index.module.scss'
import Image from '@/components/image'
import Link from '@/components/link'

export default function Blog({}) {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime="2018-08-15T00:00:00.000Z">
                      Wednesday, August 15, 2018
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  The Time Machine
                </h1>
              </div>
            </div>
          </header>
          <div
            className={`pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 ${styles.content}`}
          >
            <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2">
                    <Image
                      src="/avatar.png"
                      width="38px"
                      height="38px"
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                      <dt className="sr-only">名字</dt>
                      <dd className="text-gray-900 dark:text-gray-100">刘霞</dd>
                      <dt className="sr-only">Twitter</dt>
                      <dd>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/Twitter"
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          @Twitter
                        </a>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                <h1 id="the-time-machine-by-h-g-wells" className={styles.h1}>
                  The Time Machine by H. G. Wells
                </h1>
                <p className={styles.p}>
                  <em>Title</em>: The Time Machine
                </p>
                <p className={styles.p}>
                  <em>Author</em>: H. G. Wells
                </p>
                <p className={styles.p}>
                  <em>Subject</em>: Science Fiction
                </p>
                <p className={styles.p}>
                  <em>Language</em>: English
                </p>
                <p className={styles.p}>
                  <em>Source</em>:
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.gutenberg.org/ebooks/35"
                  >
                    Project Gutenberg
                  </a>
                </p>
                <h2 id="introduction" className={styles.h1}>
                  <a href="#introduction" aria-hidden="true" tabIndex="-1">
                    <span className="icon icon-link"></span>
                  </a>
                  Introduction
                </h2>
                <p>
                  The Time Traveller (for so it will be convenient to speak of
                  him) was expounding a recondite matter to us. His pale grey
                  eyes shone and twinkled, and his usually pale face was flushed
                  and animated. The fire burnt brightly, and the soft radiance
                  of the incandescent lights in the lilies of silver caught the
                  bubbles that flashed and passed in our glasses. Our chairs,
                  being his patents, embraced and caressed us rather than
                  submitted to be sat upon, and there was that luxurious
                  after-dinner atmosphere, when thought runs gracefully free of
                  the trammels of precision. And he put it to us in this
                  way—marking the points with a lean forefinger—as we sat and
                  lazily admired his earnestness over this new paradox (as we
                  thought it) and his fecundity.
                </p>
                <p>
                  “You must follow me carefully. I shall have to controvert one
                  or two ideas that are almost universally accepted. The
                  geometry, for instance, they taught you at school is founded
                  on a misconception.”
                </p>
                <p>
                  “Is not that rather a large thing to expect us to begin upon?”
                  said Filby, an argumentative person with red hair.
                </p>
                <p>
                  “I do not mean to ask you to accept anything without
                  reasonable ground for it. You will soon admit as much as I
                  need from you. You know of course that a mathematical line, a
                  line of thickness
                  <em>nil</em>, has no real existence. They taught you that?
                  Neither has a mathematical plane. These things are mere
                  abstractions.”
                </p>
                <p>“That is all right,” said the Psychologist.</p>
                <p>
                  “Nor, having only length, breadth, and thickness, can a cube
                  have a real existence.”
                </p>
                <p>
                  “There I object,” said Filby. “Of course a solid body may
                  exist. All real things—”
                </p>
                <p>
                  “So most people think. But wait a moment. Can an
                  <em>instantaneous</em>
                  cube exist?”
                </p>
                <p>“Don’t follow you,” said Filby.</p>
                <p>
                  “Can a cube that does not last for any time at all, have a
                  real existence?”
                </p>
                <p>
                  Filby became pensive. “Clearly,” the Time Traveller proceeded,
                  “any real body must have extension in
                  <em>four</em>
                  directions: it must have Length, Breadth, Thickness,
                  and—Duration. But through a natural infirmity of the flesh,
                  which I will explain to you in a moment, we incline to
                  overlook this fact. There are really four dimensions, three
                  which we call the three planes of Space, and a fourth, Time.
                  There is, however, a tendency to draw an unreal distinction
                  between the former three dimensions and the latter, because it
                  happens that our consciousness moves intermittently in one
                  direction along the latter from the beginning to the end of
                  our lives.”
                </p>
                <p>
                  “That,” said a very young man, making spasmodic efforts to
                  relight his cigar over the lamp; “that . . . very clear
                  indeed.”
                </p>
                <p>
                  “Now, it is very remarkable that this is so extensively
                  overlooked,” continued the Time Traveller, with a slight
                  accession of cheerfulness. “Really this is what is meant by
                  the Fourth Dimension, though some people who talk about the
                  Fourth Dimension do not know they mean it. It is only another
                  way of looking at Time.
                  <em>
                    There is no difference between Time and any of the three
                    dimensions of Space except that our consciousness moves
                    along it
                  </em>
                  . But some foolish people have got hold of the wrong side of
                  that idea. You have all heard what they have to say about this
                  Fourth Dimension?”
                </p>
                <p>
                  “<em>I</em>
                  have not,” said the Provincial Mayor.
                </p>
                <p>
                  “It is simply this. That Space, as our mathematicians have it,
                  is spoken of as having three dimensions, which one may call
                  Length, Breadth, and Thickness, and is always definable by
                  reference to three planes, each at right angles to the others.
                  But some philosophical people have been asking why
                  <em>three</em>
                  dimensions particularly—why not another direction at right
                  angles to the other three?—and have even tried to construct a
                  Four-Dimensional geometry. Professor Simon Newcomb was
                  expounding this to the New York Mathematical Society only a
                  month or so ago. You know how on a flat surface, which has
                  only two dimensions, we can represent a figure of a
                  three-dimensional solid, and similarly they think that by
                  models of three dimensions they could represent one of four—if
                  they could master the perspective of the thing. See?”
                </p>
                <p>
                  “I think so,” murmured the Provincial Mayor; and, knitting his
                  brows, he lapsed into an introspective state, his lips moving
                  as one who repeats mystic words. “Yes, I think I see it now,”
                  he said after some time, brightening in a quite transitory
                  manner.
                </p>
                <p>
                  “Well, I do not mind telling you I have been at work upon this
                  geometry of Four Dimensions for some time. Some of my results
                  are curious. For instance, here is a portrait of a man at
                  eight years old, another at fifteen, another at seventeen,
                  another at twenty-three, and so on. All these are evidently
                  sections, as it were, Three-Dimensional representations of his
                  Four-Dimensioned being, which is a fixed and unalterable
                  thing.
                </p>
                <p>
                  “Scientific people,” proceeded the Time Traveller, after the
                  pause required for the proper assimilation of this, “know very
                  well that Time is only a kind of Space. Here is a popular
                  scientific diagram, a weather record. This line I trace with
                  my finger shows the movement of the barometer. Yesterday it
                  was so high, yesterday night it fell, then this morning it
                  rose again, and so gently upward to here. Surely the mercury
                  did not trace this line in any of the dimensions of Space
                  generally recognised? But certainly it traced such a line, and
                  that line, therefore, we must conclude, was along the
                  Time-Dimension.”
                </p>
                <p>
                  “But,” said the Medical Man, staring hard at a coal in the
                  fire, “if Time is really only a fourth dimension of Space, why
                  is it, and why has it always been, regarded as something
                  different? And why cannot we move in Time as we move about in
                  the other dimensions of Space?”
                </p>
                <p>
                  The Time Traveller smiled. “Are you so sure we can move freely
                  in Space? Right and left we can go, backward and forward
                  freely enough, and men always have done so. I admit we move
                  freely in two dimensions. But how about up and down?
                  Gravitation limits us there.”
                </p>
                <p>
                  “Not exactly,” said the Medical Man. “There are balloons.”
                </p>
                <p>
                  “But before the balloons, save for spasmodic jumping and the
                  inequalities of the surface, man had no freedom of vertical
                  movement.”
                </p>
                <p>
                  “Still they could move a little up and down,” said the Medical
                  Man.
                </p>
                <p>“Easier, far easier down than up.”</p>
                <p>
                  “And you cannot move at all in Time, you cannot get away from
                  the present moment.”
                </p>
                <p>
                  “My dear sir, that is just where you are wrong. That is just
                  where the whole world has gone wrong. We are always getting
                  away from the present moment. Our mental existences, which are
                  immaterial and have no dimensions, are passing along the
                  Time-Dimension with a uniform velocity from the cradle to the
                  grave. Just as we should travel
                  <em>down</em>
                  if we began our existence fifty miles above the earth’s
                  surface.”
                </p>
                <p>
                  “But the great difficulty is this,” interrupted the
                  Psychologist. ’You
                  <em>can</em>
                  move about in all directions of Space, but you cannot move
                  about in Time.”
                </p>
                <p>
                  “That is the germ of my great discovery. But you are wrong to
                  say that we cannot move about in Time. For instance, if I am
                  recalling an incident very vividly I go back to the instant of
                  its occurrence: I become absent-minded, as you say. I jump
                  back for a moment. Of course we have no means of staying back
                  for any length of Time, any more than a savage or an animal
                  has of staying six feet above the ground. But a civilised man
                  is better off than the savage in this respect. He can go up
                  against gravitation in a balloon, and why should he not hope
                  that ultimately he may be able to stop or accelerate his drift
                  along the Time-Dimension, or even turn about and travel the
                  other way?”
                </p>
                <p>
                  “Oh,
                  <em>this</em>
                  ,” began Filby, “is all—”
                </p>
                <p>“Why not?” said the Time Traveller.</p>
                <p>“It’s against reason,” said Filby.</p>
                <p>“What reason?” said the Time Traveller.</p>
                <p>
                  “You can show black is white by argument,” said Filby, “but
                  you will never convince me.”
                </p>
                <p>
                  “Possibly not,” said the Time Traveller. “But now you begin to
                  see the object of my investigations into the geometry of Four
                  Dimensions. Long ago I had a vague inkling of a machine—”
                </p>
                <p>“To travel through Time!” exclaimed the Very Young Man.</p>
                <p>
                  “That shall travel indifferently in any direction of Space and
                  Time, as the driver determines.”
                </p>
                <p>Filby contented himself with laughter.</p>
                <p>
                  “But I have experimental verification,” said the Time
                  Traveller.
                </p>
                <p>
                  “It would be remarkably convenient for the historian,” the
                  Psychologist suggested. “One might travel back and verify the
                  accepted account of the Battle of Hastings, for instance!”
                </p>
                <p>
                  “Don’t you think you would attract attention?” said the
                  Medical Man. “Our ancestors had no great tolerance for
                  anachronisms.”
                </p>
                <p>
                  “One might get one’s Greek from the very lips of Homer and
                  Plato,” the Very Young Man thought.
                </p>
                <p>
                  “In which case they would certainly plough you for the
                  Little-go. The German scholars have improved Greek so much.”
                </p>
                <p>
                  “Then there is the future,” said the Very Young Man. “Just
                  think! One might invest all one’s money, leave it to
                  accumulate at interest, and hurry on ahead!”
                </p>
                <p>
                  “To discover a society,” said I, “erected on a strictly
                  communistic basis.”
                </p>
                <p>
                  “Of all the wild extravagant theories!” began the
                  Psychologist.
                </p>
                <p>
                  “Yes, so it seemed to me, and so I never talked of it until—”
                </p>
                <p>
                  “Experimental verification!” cried I. “You are going to verify
                  <em>that</em>
                  ?”
                </p>
                <p>
                  “The experiment!” cried Filby, who was getting brain-weary.
                </p>
                <p>
                  “Let’s see your experiment anyhow,” said the Psychologist,
                  “though it’s all humbug, you know.”
                </p>
                <p>
                  The Time Traveller smiled round at us. Then, still smiling
                  faintly, and with his hands deep in his trousers pockets, he
                  walked slowly out of the room, and we heard his slippers
                  shuffling down the long passage to his laboratory.
                </p>
                <p>The Psychologist looked at us. “I wonder what he’s got?”</p>
                <p>
                  “Some sleight-of-hand trick or other,” said the Medical Man,
                  and Filby tried to tell us about a conjuror he had seen at
                  Burslem, but before he had finished his preface the Time
                  Traveller came back, and Filby’s anecdote collapsed.
                </p>
              </div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://mobile.twitter.com/search?q=https%3A%2F%2Ftailwind-nextjs-starter-blog.vercel.app%2Fblog%2Fthe-time-machine"
                >
                  Discuss on Twitter
                </Link>
                •
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/data/blog/the-time-machine.mdx"
                >
                  View on GitHub
                </a>
              </div>
              <div id="comment">
                <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
                  <button>Load Comments</button>
                  <div className="giscus" id="comments-container"></div>
                </div>
              </div>
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                <div className="py-4 xl:py-8">
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    标签
                  </h2>
                  <div className="flex flex-wrap">
                    <Link
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="/tags/writings"
                    >
                      writings
                    </Link>
                    <Link
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="/tags/book"
                    >
                      book
                    </Link>
                    <Link
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="/tags/reflection"
                    >
                      reflection
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                  <div>
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      上一页
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href="/blog/pictures-of-canada">O Canada</Link>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      下一页
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href="/blog/github-markdown-guide">
                        Markdown Guide
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 xl:pt-8">
                <a
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  href="/blog"
                >
                  ← 回到作品集
                </a>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  )
}
