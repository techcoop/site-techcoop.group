import React from 'react'
import { Link } from 'react-router'
import {
  Content, Grid, Cell,
  Title, Body1, Caption, Button,
  Card, CardHeader, CardTitle, CardText, CardActions
} from 'react-mdc-web'
import './HomeView.scss'
import ProductTankImage from './../assets/product-tank.png'
import GolangMontrealImage from './../assets/golang-montreal.png'

export const HomeView = () => (
  <Content>
    <Card className='mission-card'>
      <CardHeader>
        <CardTitle>
          <i className='material-icons section-icon'>flag</i>
          <span className='section-title'>Our Mission</span>
        </CardTitle>
      </CardHeader>
      <CardText>
        <p className='mission-quote'>
          "Establish a cooperative of experts to contribute to open source projects, exchange knowledge,
          and support the launch of new ideas."
        </p>
      </CardText>
      <CardActions>
        <Link to='/apply' activeClassName='route--active'>
          <Button accent raised>Apply Today!</Button>
        </Link>
      </CardActions>
    </Card>

    <div className='text-content'>
      <Title>Group Events</Title>
      <Body1>
        In order to always be improving in our craft, we plan and host various events that allow us to share the
        knowledge we get with others, while at the same time refining what we already know, and having some fun.
      </Body1>

      <Grid>
        <Cell col={6} tablet={8} phone={4}>
          <Card>
            <CardHeader>
              <CardTitle>
                <i className='material-icons section-icon'>lightbulb_outline</i>
                <span className='section-title'>Pitch your Idea</span>
              </CardTitle>
            </CardHeader>
            <CardText className='event-card-text'>
              <p>
                Great ideas need great technology. There is no better way to assess the technical feasibility
                of any project, than by pitching an idea to our group. Brainstorming options for implementation,
                potential pitfalls you might run into along the way, and even new opportunities for the idea can
                come out of one of these live discussion sessions.
              </p>
            </CardText>
          </Card>
        </Cell>
        <Cell col={6} tablet={8} phone={4}>
          <Card>
            <CardHeader>
              <CardTitle>
                <i className='material-icons section-icon'>developer_board</i>
                <span className='section-title'>Hackathons</span>
              </CardTitle>
            </CardHeader>
            <CardText className='event-card-text'>
              <p>
                Our Hackathons can take on varied forms in order to execute projects with different requirements.
                Project ideas can be proposed by any member and the resulting code will be released under our GitHub
                organization.  Breaking off into teams for different implementations, or everyone working together
                on the same implementation, we strive to keep things exciting and different than traditional events.
              </p>
            </CardText>
          </Card>
        </Cell>
        <Cell col={6} tablet={8} phone={4}>
          <Card>
            <CardHeader>
              <CardTitle>
                <i className='material-icons section-icon'>build</i>
                <span className='section-title'>Coding Sessions</span>
              </CardTitle>
            </CardHeader>
            <CardText className='event-card-text'>
              <p>
                Small group working sessions at any location are great for hacking on a side project with a second
                pair of eyes to  and discuss ideas.  Unlike Hackathons, these
                sessions can be for whatever, including "real work" for those with remote work options.
              </p>
            </CardText>
          </Card>
        </Cell>
        <Cell col={6} tablet={8} phone={4}>
          <Card>
            <CardHeader>
              <CardTitle>
                <i className='material-icons section-icon'>memory</i>
                <span className='section-title'>Prototype Challenge</span>
              </CardTitle>
            </CardHeader>
            <CardText className='event-card-text'>
              <p>
                Any member with an extremely complex problem can ask our group for possible solutions.  But sometimes
                the efficiency in which a solution performs is more important than just something that works.  We set
                a challenge to the group to submit the most efficient implementation and evaluate the benefits and
                drawbacks of each implementation with benchmarks.
              </p>
            </CardText>
          </Card>
        </Cell>
      </Grid>

      <Title>Networking Events</Title>
      <Body1>
        Occasionally it's useful to get off computer and talk to people and listen to presentations in real life.
        We attend a number of Technology and Business focused MeetUps regularly and are always advertising for
        the next one someone from the group will be attending.
      </Body1>

      <Grid>
        <Cell col={6} tablet={8} phone={4}>
          <Card>
            <CardHeader>
              <CardTitle>
                <img src={ProductTankImage} className='section-image-icon' />
                <span className='section-title'>PRODUCT tank</span>
              </CardTitle>
            </CardHeader>
            <CardText className='event-card-text'>
              <p>
                Always has an interesting line up of StartUps talking about their product and technology, usually
                has a different theme for the kinds of products represented. Events are hosted regularly, and with
                equal parts Techies and Product people who go to this meetup, it's always interesting.
              </p>
            </CardText>
            <CardActions>
              <Link to='https://www.meetup.com/ProductTank-Montreal' target='_blank'>
                <Button>Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={6} tablet={8} phone={4}>
          <Card>
            <CardHeader>
              <CardTitle>
                <img src={GolangMontrealImage} className='section-image-icon' />
                <span className='section-title'>Golang Montreal</span>
              </CardTitle>
            </CardHeader>
            <CardText className='event-card-text'>
              <p>
                We have a few lovers of the Go language in the group, so like to keep up with what is changing
                with the language as well as what other Gophers in Montreal are doing with it by going to this meetup.
              </p>
            </CardText>
            <CardActions>
              <Link to='https://www.meetup.com/GolangMontreal/' target='_blank'>
                <Button>Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={6} tablet={8} phone={4}>
          <Card>
            <CardHeader>
              <CardTitle>
                The Entrepreneur's Journey
              </CardTitle>
            </CardHeader>
            <CardText className='event-card-text'>
              <p>
                Amazing business focused MeetUp that happens almost every week with a new topic.  Run by the great
                people at WeWork Montreal, and hosted just outside downtown by the bell center, this meetup is a great
                way to learn the business side of things.
              </p>
            </CardText>
            <CardActions>
              <Link to='https://www.meetup.com/The-Entrepreneurs-Journey/' target='_blank'>
                <Button>Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={6} tablet={8} phone={4}>
          <Card>
            <CardHeader>
              <CardTitle>
                CTO and Lead Developers
                <br /><br />
              </CardTitle>
            </CardHeader>
            <CardText className='event-card-text'>
              <p>
                This a really great Meetup with technology experts from around Montreal coming together to share
                war stories. This group is not always just focused on the technology, but also on running technology
                companies and managing teams.
              </p>
            </CardText>
            <CardActions>
              <Link to='https://www.meetup.com/The-Entrepreneurs-Journey/' target='_blank'>
                <Button>Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Cell>
      </Grid>

      <Title>Lively Conversations</Title>
      <Body1>
        Come join our slack channel where all sorts of weird and wonderful things are discussed. We even
        have our own "radio station" run by our resident troll that occasionally has a good song on it.
      </Body1>

      <Title>Contribute to Open Source</Title>
      <Body1>
        We have a number of project ideas brewing that we are planning to start work on soon.  Join us in contributing
        back to the open source community we all benefit from.
      </Body1>

      <Title>Mentors and Advice</Title>
      <Body1>
        Our members have years of experience working with various technologies on many different projects.  We
        have expertise enough to spare and can offer both technology and career advice to our members. Also, from
        time to time, you will find out obscure and terrible things that you never knew existed.
      </Body1>

      <Title>Still not convinced?</Title>
      <Body1>
        We encourage you to come to one of the many MeetUps that we attend and meet some of us.  For now, contact
        colin at techcoop.group to find out what the next event we will be attending is.
      </Body1>

    </div>

    <footer style={{ margin: '10px' }}>
      <Caption>Copyright &copy; TechCoop 2017</Caption>
    </footer>
  </Content>
)

/*
// TODO section pulled for now, too early to talk about this I feel
      <h2 className='mdc-typography--title'>We Launch new Businesses</h2>
      <p className='mdc-typography--body1'>
        We have a number of members who are equally interested in Entrepreneurship as they are in Technology.
        Contribute to the innovation of these new ideas, and have the possibility to join the Start Up as it
        takes flight.
      </p>
*/
export default HomeView
