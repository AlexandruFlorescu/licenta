<Container text textAlign='justified'>
  <Header as='h2'>{this.props.post.title}</Header>
  {this.props.post.text}
  <Divider />
</Container>


<Container text textAlign='justified'>
  <Header as='h2'>{this.props.post.title}</Header>
  {this.props.post.text}
  <Divider />
</Container>

  <PostDetail post={post} author={this.props.author}/>



  <Menu.Item >
    <Button as={Link} to="/signIn" name='Sign In' primary>Sign IN!</Button>
  </Menu.Item>
  <Menu.Item >
    <Button as={Link} to="/signUp" name='Sign Up' primary>Sign UP!</Button>
  </Menu.Item>


  <Dropdown>
    <Dropdown.DropdownTrigger> Identify yourself, human! </Dropdown.DropdownTrigger>


  </Dropdown>
  <Dropdown.DropdownContent>
    <ul>
      <li>
        <Header as='h3'>"Let's be friends :)" </Header>
      </li>

      <li>
      <Button as={Link} to="/signIn" name='Sign In' primary fluid>Sign IN!</Button>
      </li>

      <li>
      <Button as={Link} to="/signUp" name='Sign Up' primary fluid>Sign UP!</Button>
      </li>
    </ul>
  </Dropdown.DropdownContent>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  <Menu>
    <Menu.Item as={Link} to="/" name='Home' >Home</Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item> <Icon name="plus" circlular inverted color='teal'/> Write </Menu.Item>
      <Dropdown item  icon="user" text='My Profile'>
        <Dropdown.Menu>
          <Dropdown.Header content={"Do your thing, "+jwt_decode(this.props.authed.token)._doc.username}/>
          <Dropdown.Divider />
          <Dropdown.Item> <Button as={Link} to='/userProfile' primary fluid> My awesome profile! </Button> </Dropdown.Item>
          <Dropdown.Item> <Button secondary fluid onClick={this.logOff.bind(this)}> Off you go then... </Button></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>)
}
else {
  return (
    <Menu>
      <Menu.Item as={Link} to="/" name='Home' >Home</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Dropdown item text='Identify yourself, human!' id="centeredText" >
            <Dropdown.Menu>
              <Dropdown.Header content="Let's be friends :)" centered/>
              <Dropdown.Divider />
              <Dropdown.Item><Button as={Link} to="/signIn" name='Sign In' primary fluid>Sign IN!</Button></Dropdown.Item>
              OR
              <Dropdown.Item><Button as={Link} to="/signUp" name='Sign Up' secondary fluid>Sign UP!</Button></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
///////////////////////////////

<Grid centered divided>
  <Grid.Row color='blue'>
    <Grid.Column width={2}>
      <Label size="big" color='blue' > Username: </Label>
    </Grid.Column>
    <Grid.Column width={6}>
      <Input name="username" placeholder="Username"  onChange={this.handleChange.bind(this)} fluid/>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row color='blue'>
    <Grid.Column width={2}>
      <Label size="big" color='blue'> Password: </Label>
    </Grid.Column>
    <Grid.Column width={6}>
      <Input name="password" placeholder="Password" type='password' onChange={this.handleChange.bind(this)} fluid/>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row color='blue'> <Button className='login' primary inverted onClick={this.handleSubmit.bind(this)}> JOIN! </Button> </Grid.Row>
</Grid>


// Register Form
<div className='registerWrapper'>
  <div className="registerHeader">
    <h1> New faces, huh?</h1>
    <p> Usually new fish get shrecked in the first week. Wonder if you got what it takes to make it</p>
    <br/>
    <p> How about you introduce yourself right below</p>
  </div>

  <div className='registerForm'>
        <label> Username: </label>
        <input name="username" onChange={this.handleRegisterChange.bind(this)}/>

        <label> Email: </label>
        <input name="password" type='email' onChange={this.handleRegisterChange.bind(this)}/>

        <label> Password: </label>
        <input name="password" type='password' onChange={this.handleRegisterChange.bind(this)}/>

        <label> Confirm Password: </label>
        <input name="password" type='password' onChange={this.handleRegisterChange.bind(this)}/>

        <button className='primaryButton'> Register </button>
 </div>
</div>

/////// UsersList
<Grid columns={3} centered divided >
  {
    this.props.users.map(user => {
      return (<Grid.Row key={user.id}>
                <Grid.Column width={3}>
                  <Sticky enabled={true} top={50}>
                    <UserCard user={user} />
                  </Sticky>
                </Grid.Column>
                <Grid.Column width={10} color='black'>
                  <ListPosts posts={this.props.posts.filter(post=> post.author == user._id)} author={user}/>
                </Grid.Column>
             </Grid.Row>)
  })
}
</Grid>)

//////

  <div className="topNav">
    <Link to='/'> <img src={require('./../client/seaStarLogo.png')}/> </Link>
  </div>

  <Link to='/signIn'><button className='primaryButton inNav'> Howdy, sailor! </button> </Link>


  import {injectGlobal} from 'styled-components'

  /injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
  :root {

  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
  body {
      color: #222;
      height: 100vh;
      font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      font-weight: 300;
      font-size: 15px;

  		background: url('/client/vertical-waves.png') ,radial-gradient(var(--ICE),  var(--aquamarine)) fixed;

  }

  .app{
  	display: flex;
  }

  main{
  	flex: 1;
    height: 100vh;
  	width: 90vw;
  	margin-left: 10vw;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	overflow-y: scroll;
  }`;


  <Grid centered divided>
    <Grid.Row style={{visibility: this.state.displayErrors ? 'visible' : 'hidden'}}>
      <Grid.Column color={this.state.beenSubmited ? 'red' : 'yellow'}>
        <ul type='none'>
          {
            this.state.errors.map((error) => {
                return <li > {error} </li> })
          }
        </ul>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row color='blue'>
    {/* Username */}
      <Grid.Column width={2}>
        <Label size="big" color='blue'> Username: </Label>
      </Grid.Column>
      <Grid.Column width={6}>
        <Input name="username" placeholder="Username"  onChange={this.handleChange.bind(this)} fluid/>
      </Grid.Column>
    </Grid.Row>
    {/* Email */}
    <Grid.Row color='blue'>
      <Grid.Column width={2}>
        <Label size="big" color='blue'> Email: </Label>
      </Grid.Column>
      <Grid.Column width={6}>
        <Input name="email" placeholder="Email" type="email" onChange={this.handleChange.bind(this)} fluid/>
      </Grid.Column>
    </Grid.Row>
    {/* Password */}
    <Grid.Row color='blue'>
      <Grid.Column width={2}>
        <Label size="big" color='blue'> Password: </Label>
      </Grid.Column>
      <Grid.Column width={6}>
        <Input name="password" placeholder="Password" type="password" onChange={this.handleChange.bind(this)} fluid/>
      </Grid.Column>
    </Grid.Row>
    {/* Confirm Password */}
    <Grid.Row color='blue'>
      <Grid.Column width={2}>
        <Label size="big" color='blue'> Confirm: </Label>
      </Grid.Column>
      <Grid.Column width={6}>
        <Input name="confirmPassword" placeholder="Password" type="password" onChange={this.handleChange.bind(this)} fluid/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row color='blue'> <Button primary inverted onClick={this.handleSubmit.bind(this)}> JOIN! </Button> </Grid.Row>
  </Grid>
