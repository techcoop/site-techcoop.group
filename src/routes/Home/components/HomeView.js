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
      <h2 className='mdc-typography--title'>We do Stuff as a Group</h2>
      <p className='mdc-typography--body1'>
        In order to always be improving in our craft, we plan and host various events that allow us to share the
        knowledge we get with others, while at the same time refining what we already know and building something fun.
      </p>

      <div className='mdc-layout-grid'>
        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                Prototype Hack Out
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Pose an open challenge to the group to generate solutions based on specific success criteria,
                solutions are evaluated by a committee and a winner chosen.  An article will be written for
                your challenge and posted on Medium.
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
                Hosting Hackathon events where one project from a list of proposals from our members will be selected
                and hacked together.  All projects created will be open sourced and posted on our github organization.
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
                Small coding sessions at a local cafe or other space and invite a few people to join you while you
                work on your own project, but have people to bounce ideas off of nearby.
               </p>
            </section>
          </div>
        </div>

        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
          <div className='mdc-card event-card'>
            <section className='mdc-card__media event-media'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                Tech problem pitches
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Have a great idea you think you can build? Present the idea and have it be torn apart by the group
                as a way to vet the technology options for it.
              </p>
            </section>
          </div>
        </div>
      </div>

      <h2 className='mdc-typography--title'>We Go to Meet Ups</h2>
      <p className='mdc-typography--body1'>
        Occasionally it's useful to get off the internet and talk to people and listen to presentations in real life,
        we attend a number of Technology and Business focused MeetUps regularly and annoy our members into showing up.
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
                has a different theme and events are hosted regularly.  Equal parts Techies and Product people go
                to this meetup so it's always interesting.
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
                Montréal CTO and Lead Developers Meetup
              </h1>
            </section>
            <section className='mdc-card__supporting-text'>
              <p>
                Great Meetup with Technology experts from around Montreal coming together to share war stories, not
                always focused on the technology, but also on running technology companies and managing teams, this
                MeetUps is getting better every time.
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
                Golang Montréal
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
                people at WeWork Montreal and hosted just outside downtown by the bell center, this meetup is a great
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

      <h2 className='mdc-typography--title'>We Argue and Discuss Stuff</h2>
      <p className='mdc-typography--body1'>
        Come join our 'lively' slack channel where all sorts of weird and wonderful things are discussed, we even
        have our own 'radio' station run by our resident troll that even occasionally has a good song on it.
      </p>

      <h2 className='mdc-typography--title'>We Build Open Source Stuff</h2>
      <p className='mdc-typography--body1'>
        We have a number of project ideas brewing that we are planning to start work on, join us in contributing
        back to the open source community!
      </p>

      <h2 className='mdc-typography--title'>We Launch new Businesses</h2>
      <p className='mdc-typography--body1'>
        We have a number of members who are equally interested in Entrepreneurship as they are in Technology, contribute
        to the innovation of these new ideas, and have the possibility to join the Start Up as it takes flight.
      </p>

      <h2 className='mdc-typography--title'>We have some Brains</h2>
      <p className='mdc-typography--body1'>
        We have some pretty ancient members who have spent the better part of their lives being equal parts amazing
        as terrible.  Have a chance to learn things you didn't even know existed and probably didn't want to know
        existed as well.
      </p>

      <h2 className='mdc-typography--title'>Still not convinced?</h2>
      <p className='mdc-typography--body1'>
        We encourage you to come to one of the many MeetUps that we attend.  For now, contact gagnon.colin at gmail.com.
      </p>

    </div>

    <div style={{ marginTop: '30px' }}>
      Copyright &copy; TechCoop 2017
    </div>
  </main>
)

export default HomeView
