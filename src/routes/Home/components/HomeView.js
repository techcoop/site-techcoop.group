import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <main style={{ margin: '8px', marginTop: '25px' }}>
    <div className='mdc-card mission-card'>
      <section className='mdc-card__media mission-media'>
        <h1 className='mdc-card__title mdc-card__title--large' style={{ color: '#FFFFFF' }}>Our Mission</h1>
      </section>

      <section className='mdc-card__supporting-text'>
        <p>
        "Establish a cooperative of experts to contribute to open source projects, exchange knowledge,
        and support the launch of new ideas."
       </p>
      </section>
      <section className='mdc-card__actions'>
        <Link to='/apply' activeClassName='route--active'>
          <button className='mdc-button mdc-button--compact mdc-card__action'>Apply Today!</button>
        </Link>
      </section>
    </div>

    <div className='text-content'>
      <h2 className='mdc-typography--title'>Planned events</h2>
      <p className='mdc-typography--body1'>
        In order to always be improving in our craft, we plan and host various events that allow us to share the
        knowledge we get with others, while at the same time refining what we already know, and having some fun.
      </p>

      <div className='mdc-layout-grid'>
        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                Prototype Challenge
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Any member with an extremely complex problem can ask our group for possible solutions.  But sometimes
                the efficiency in which a solution performs is more important than just something that works.  We set
                a challenge to the group to submit the most efficient implementation and evaluate the benefits and
                drawbacks of each implementation with benchmarks.
              </p>
            </section>
          </div>
        </div>

        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                Hackathon
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Our Hackathons can take on varied forms in order to execute projects with different requirements.
                Project ideas can be proposed by any member and the resulting code will be released under our GitHub
                organization.  Breaking off into teams for different implementations, or everyone working together
                on the same implementation, we strive to keep things exciting and different than traditional events.
              </p>
            </section>
          </div>
        </div>

        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                Coding Sessions
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Small group working sessions at any location are great for hacking on a side project with a second
                pair of eyes to help with issues and bounce ideas off of each other.  Unlike Hackathons, these
                sessions can be for whatever, including "real work" for those with remote work options.
               </p>
            </section>
          </div>
        </div>

        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                Pitch your Idea
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Great ideas need great technology. There is no better way to assess the technical feasibility
                of any project, than by pitching an idea to our group. Brainstorming options for implementation,
                potential pitfalls you might run into along the way, and even new opportunities for the idea can
                come out of one of these live discussion sessions.
              </p>
            </section>
          </div>
        </div>
      </div>

      <h2 className='mdc-typography--title'>We Go to Meet Ups</h2>
      <p className='mdc-typography--body1'>
        Occasionally it's useful to get off computer and talk to people and listen to presentations in live.
        We attend a number of Technology and Business focused MeetUps regularly and are always advertising for
        the next one someone from the group will be attending.
      </p>

      <div className='mdc-layout-grid max-width'>
        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                Product Tank Montreal
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Always has an interesting line up of StartUps talking about their product and technology, usually
                has a different theme for the kinds of products represented. Events are hosted regularly, and with
                equal parts Techies and Product people who go to this meetup, it's always interesting.
              </p>
            </section>
            <section className='mdc-card__actions'>
              <Link to='https://www.meetup.com/ProductTank-Montreal' target='_blank'>
                <button className='mdc-button mdc-button--compact mdc-card__action'>Details</button>
              </Link>
            </section>
          </div>
        </div>

        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                Montreal CTO and Lead Developers Meetup
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Great Meetup with Technology experts from around Montreal coming together to share war stories. This
                group is not always just focused on the technology, but also on running technology companies and
                managing teams.
              </p>
            </section>
            <section className='mdc-card__actions'>
              <Link to='https://www.meetup.com/Montreal-CTO-Meetup/' target='_blank'>
                <button className='mdc-button mdc-button--compact mdc-card__action'>Details</button>
              </Link>
            </section>
          </div>
        </div>

        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                Golang Montreal
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                We have a few lovers of the Go language in the group, so like to keep up with what is changing
                with the language as well as what other Gophers in Montreal are doing with it by going to this meetup.
              </p>
            </section>
            <section className='mdc-card__actions'>
              <Link to='https://www.meetup.com/GolangMontreal/' target='_blank'>
                <button className='mdc-button mdc-button--compact mdc-card__action'>Details</button>
              </Link>
            </section>
          </div>
        </div>

        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                The Entrepreneur's Journey
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Amazing business focused MeetUp that happens almost every week with a new topic.  Run by the great
                people at WeWork Montreal, and hosted just outside downtown by the bell center, this meetup is a great
                way to learn the business side of things.
              </p>
            </section>
            <section className='mdc-card__actions'>
              <Link to='https://www.meetup.com/The-Entrepreneurs-Journey/' target='_blank'>
                <button className='mdc-button mdc-button--compact mdc-card__action'>Details</button>
              </Link>
            </section>
          </div>
        </div>

      </div>











      <h2 className='mdc-typography--title'>Lively conversations</h2>
      <p className='mdc-typography--body1'>
        Come join our slack channel where all sorts of weird and wonderful things are discussed. We even
        have our own "radio station" run by our resident troll that occasionally has a good song on it.
      </p>

      <h2 className='mdc-typography--title'>Open Source Projects</h2>
      <p className='mdc-typography--body1'>
        We have a number of project ideas brewing that we are planning to start work on soon.  Join us in contributing
        back to the open source community we all benefit from.
      </p>

      <h2 className='mdc-typography--title'>Mentors and Advice</h2>
      <p className='mdc-typography--body1'>
        Our members have years of experience working with various technologies on many different projects.  We
        have expertise enough to spare and can offer both technology and career advice to our members. For also, from
        time to time, find out things that you never knew existed.
      </p>

      <h2 className='mdc-typography--title'>Still not convinced?</h2>
      <p className='mdc-typography--body1'>
        We encourage you to come to one of the many MeetUps that we attend.  For now, contact gagnon.colin at gmail.com.
      </p>

    </div>

    <div style={{ marginTop: '40px' }}>
      Copyright &copy; TechCoop 2017
    </div>
  </main>
)

/*

// TODO section pulled for now, too early to talk about this I feel
      <h2 className='mdc-typography--title'>We Launch new Businesses</h2>
      <p className='mdc-typography--body1'>
        We have a number of members who are equally interested in Entrepreneurship as they are in Technology.
        Contribute to the innovation of these new ideas, and have the possibility to join the Start Up as it takes flight.
      </p>

*/
export default HomeView
