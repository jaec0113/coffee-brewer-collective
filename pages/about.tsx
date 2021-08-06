import Head from "next/head"
import Layout from "../components/Layout"
import { EmailButton } from "../components/Buttons"

export default function about() {
  return (
    <Layout>
      <Head>
        <title>About Coffee Brewing Collective</title>
        <meta
          name='keywords'
          content='about, coffee brewing collective, questions, submissions, contact, coffee brewing, pour over, french press, aeropress, syphon'
        />
        <meta
          name='descriptions'
          content='Coffee Brewing Collective was created in order for coffee lovers to find a variety of coffee brewing recipes that they could try. Users can find recipes for pour over, French Press, Aeropress, and syphon(siphon) coffee makers.'
        />
      </Head>
      <h1 className='text-center text-3xl font-bold my-4'>
        About Coffee Brewing Collective
      </h1>
      <div className='flex flex-col mx-3 text-justify'>
        <h2 className='text-xl font-bold my-2'>
          What is Coffee Brewing Collective?
        </h2>
        <p className='font-light my-1'>
          I love making (and drinking coffee). These days there are so many
          different ways to brew coffee, and I found it to be very interesting
          to try out different brewing recipes from different coffee
          professionals. However, it's a bit of a pain to have to go to
          different YouTube channels or blogs or websites to find them. So, this
          site was born.
        </p>
        <p className='font-light my-1'>
          In this one site you can find a variety of great coffee recipes from
          knowledgeable and experienced coffee professionals from all over the
          world. You can also find recipes for several different types of
          brewers: various pour overs, French Press (and other steeped methods),
          Aeropress, and Syphon.
        </p>

        <h2 className='text-xl font-bold my-2'>Why No Espresso?</h2>
        <p className='font-light my-1'>
          The reason there is no espresso section is because broadly I think
          most espresso recipes are the same. That being said, I know that with
          machines like the Decent (and lever machines and some high end
          machines like Slayer) that it is possible to do more with variables
          like flow, pressure, etc. If you have an espresso recipe that you
          believe is uniquely different from the 'standard' (IE X grams coffee
          in, X-3X grams liquid out, 25-30 second shot time, 9 bars) then please
          submit it below! If at least a few recipes come in then an espresso
          section can be born!
        </p>

        <h2 className='text-xl font-bold my-2'>Why Register?</h2>
        <p className='font-light my-1'>
          If you register, you can save your favorite recipes to your profile
          and easily access them whenever you want to see them. Also, you can
          rate and leave reviews for different brewing recipes so others can
          benefit from your experiences.
        </p>
        <a href='/account/register'>
          <EmailButton text='Register' />
        </a>

        <h2 className='text-xl font-bold my-2'>Contact</h2>
        <p className='font-light my-1'>
          If you're a coffee professional and would like to submit a brewing
          recipe or if you know of a good brewing recipe, please email it to the
          address below. If the recipe is not yours, please also submit a
          contact (email, social media profile) to the recipe creator or a
          screenshot or some proof that the creator is okay with the recipe
          appearing on this site. If you'd just like to ask a question or leave
          some feedback, please click the 'Email Us' button at the bottom. All
          feedback is welcome!
        </p>
      </div>
      <div className='flex flex-col ml-3'>
        <a href='mailto:coffeeaje0113@gmail.com?subject=Brewing%20Recipe%20Submission'>
          <EmailButton text='Submit a Recipe' />
        </a>
        <a href='mailto:coffeeaje0113@gmail.com?subject=Coffee%20Brewing%20Question'>
          <EmailButton text='Email Us' />
        </a>
      </div>
    </Layout>
  )
}
