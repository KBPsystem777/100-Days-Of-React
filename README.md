# Koleen Paunon's 30-Days-Of-React journey
*This serves as my coding logs throughout my #ReactJS learning*

I have previously pushed bunch of React codes to our start-up repo only to found out that I am missing something. I'm missing the true fundamentals of React, which is the most important in learning it. So in order to refresh my memory and keep things running, I paused, reflect and trying to grasp React one more time but this time, in an elegant way > 

---

## Coding Logs

### [Day 1](#day-1)

- Following tutorials from [30 Days Of React](https://github.com/fullstackreact/30-days-of-react) and following the exercises for Notification panel. Had a hard time in getting the CSS for the view but I changed my mind to use [w3-css](https://github.com/fullstackreact/30-days-of-react) stylesheet.

- I found the instructions for the `<Timeline />` component is too large so I broke it up into a 3 different *React Component*

- Had a clear understanding of basic React `props` and implemented it on the components. As you can see on the following commits:
    * [{this.props.time}](https://github.com/KBPsystem777/30-Days-Of-React/commit/1bcd3247e9d26b525945d733c81ccc8a73948043#diff-14b1e33d5bf5649597cdc0e4f684daddR17)

    * [Output](https://github.com/KBPsystem777/30-Days-Of-React/commit/1bcd3247e9d26b525945d733c81ccc8a73948043#diff-14b1e33d5bf5649597cdc0e4f684daddR48)


### [Day 2](#day-2)

- Still studying how to display data in React using the JSON via props.

- I did this method using the `map()` function in JavaScript. Challenge right now is the manipulation of array objects - I need to dig hard on `objects`


### [Day 3](#day-3)

- Just watched some YouTub videos today discussing `props` in order to have deeper understanding of it. Here are my personal recommendations:

    * [Passing Data with Props](https://www.youtube.com/watch?v=GIU8ekYndKw&index=2&list=PLdVadnqHPMJEY8Dz4DdHAqrounEZJ0x6M&t=0s)

    * [React Props](https://www.youtube.com/watch?v=i1PLMgtG5Qo&index=4&list=PLdVadnqHPMJEY8Dz4DdHAqrounEZJ0x6M&t=2s)

### [Day 4](#day-4)

- After days of nightshift and overtime at work, this is my updates:

    * Currently found a new book in GitBook: https://legacy.gitbook.com/book/chrisnoring/react/details

     * Im gonna give [FreeCodeCamp's React Curriculum](https://learn.freecodecamp.org/front-end-libraries/react) a shot today.

    * I am actually overwhelmed by the facts and plenty of resources about React, either online content: videos/ebook/PDFs/blogs and so on. My advise is that stick to your current resource and dont let any material(s) distract your goals. It happens to me all the time.

### [Day 5](#day-5)

- Early morning activity with these FreccCodeCamp React exercises:

    * [Compose React Components](https://learn.freecodecamp.org/front-end-libraries/react/compose-react-components/)

    * [Render Class Component to DOM](https://learn.freecodecamp.org/front-end-libraries/react/render-a-class-component-to-the-dom)

    * [React Component from Scratch](https://learn.freecodecamp.org/front-end-libraries/react/write-a-react-component-from-scratch)

    * [Pass Props to a Stateless Functional component](https://learn.freecodecamp.org/front-end-libraries/react/pass-props-to-a-stateless-functional-component)

    * [Pass an array as props](https://learn.freecodecamp.org/front-end-libraries/react/pass-an-array-as-props)
    *Sample:*
        ```
        const List = (props) => {
            return <p>{props.tasks.join(', ')</p>
        }

        class ToDo extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return(
                    <div>
                        <h1>To Do Lists</h1>
                        <h2>Today</h2>
                        <List tasks = {["learn", "code", "learn", "code", "repeat"]}>
                        <h2>Tomorrow</h2>
                        <List tasks = {["code", "code", "code"]}>
                    </div>
                );
            }
        }
        ```
    * [Use default Props](https://learn.freecodecamp.org/front-end-libraries/react/use-default-props)

### [Day 6](#day-6)

- Doing FreeCodeCamp [#ReactJS](https://twitter.com/search?q=%23reactjs&src=typd) exercises at 6:00 AM after work.

- Sounds clear to me now what's the difference between `props` and `states`. We use `props` for passing absolute data/values in the components. When I say absolute I mean fixed values that you think will not change throughout the lifecycle. In contrary to that, we have `states`. States handles all the changing values in the components.

- Watching and still analyzing these ReactJS videos:

    * [Events in React](https://www.youtube.com/watch?v=OcM__8q6p4c)

    * [State of Components](https://www.youtube.com/watch?v=e5n9j9n83OM)

### [Day 7](#day-7)

- Doing ReactJS activities before going to work:

    * [Override Default Props](https://learn.freecodecamp.org/front-end-libraries/react/override-default-props)

    * [Use PropTypes to Define the Props you expect](https://learn.freecodecamp.org/front-end-libraries/react/override-default-props/) - Had a hardtime on this challenge. Basically, I need to restrict the props `quantity` to be a number only type of props. So after read and search via [PropTypes NPM docs](https://www.npmjs.com/package/prop-types) I got the hint on what to do. My passing code:
        ```
        const Items = (props) => {
        return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
        };

        // change code below this line
        Items.propTypes = {
        quantity: PropTypes.number.isRequired
        };
        // change code above this line

        Items.defaultProps = {
        quantity: 0
        };

        class ShoppingCart extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <Items />
        }
        };
        ```
    * [Access Props using this.props](https://learn.freecodecamp.org/front-end-libraries/react/access-props-using-this-props) - This activity is kinda actually the same with what I did on Day 1. Here is my complete solution for the problem:

        ```
        class ReturnTempPassword extends React.Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
                <div>
                    { /* change code below this line */ }
                    <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
                    { /* change code above this line */ }
                </div>
            );
        }
        };

        class ResetPassword extends React.Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
                <div>
                <h2>Reset Password</h2>
                <h3>We've generated a new temporary password for you.</h3>
                <h3>Please reset this password from your account settings ASAP.</h3>
                { /* change code below this line */ }
                <ReturnTempPassword tempPassword={'qwertyui'} />
                { /* change code above this line */ }
                </div>
            );
        }
        };
        ```

### [Day 8](#day-8)

- Rainy morning here @CyberGate2, still awake and answering this React exercise before going home:
    * [Review Using props with Stateless Functional Component](https://learn.freecodecamp.org/front-end-libraries/react/review-using-props-with-stateless-functional-components) - Finally in here I learned how to validate props or assign a property to props in here I was tasked to restrict the props to be `string` only. And then assign a default `prop` value. Here's my solution:

        ```
        class Camper extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return(
            <div>
                <p>{this.props.name}</p>
            </div>
            );
        }
        }

        Camper.propTypes = {
        name: PropTypes.string.isRequired
        };

        Camper.defaultProps = {
        name: 'CamperBot'
        };


        class CampSite extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
            <div>
                <Camper name = {'KBPsystem'} />
            </div>
            );
        }
        };
        // change code below this line

        ```

### [Day 9](#day-9)

- Just got busy at work so I'm home now solving FreeCodeCamp's ReactJS problems. Answered the following exercises:
    * [Creating Stateful Components](https://learn.freecodecamp.org/front-end-libraries/react/create-a-stateful-component/).
        My Solution:

        ```
        class StatefulComponent extends React.Component {
        constructor(props) {
            super(props);
            // initialize state here
            this.state = {
            name: 'Koleen Paunon'

            }
        }
        render() {
            return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
            );
        }
        };
        ```
    * [Render State in the User Interface](https://learn.freecodecamp.org/front-end-libraries/react/render-state-in-the-user-interface) - One thing I learned here is that `state` state is responsible in tracking your data changes in your app and then renders those change on the UI. When state data updates, it triggers a re-render of UI in all components up to child level that is using the same data as prop. Here is my solution for the activity:
        ```
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            name: 'freeCodeCamp'
            }
        }
        render() {
            return (
            <div>
                { /* change code below this line */ }
                <h1>{this.state.name}</h1>
                { /* change code above this line */ }
            </div>
            );
        }
        };
        ```


### [Day 10](#day-9)

- Currently here at [Lopez, Quezon](https://en.wikipedia.org/wiki/Lopez,_Quezon) doing the following ReactJS challenges:
    
    * [Render State in the User Interface Another Way](https://learn.freecodecamp.org/front-end-libraries/react/render-state-in-the-user-interface-another-way) - Teaches an idea on how to access React `state` using pure JavaScript. My Solution:

        ```
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            name: 'freeCodeCamp'
            }
        }
        render() {
            // change code below this line
            const name = this.state.name
            // change code above this line
            return (
            <div>
                { /* change code below this line */ }
                <h1>{ name }</h1>
                { /* change code above this line */ }
            </div>
            );
        }
        };
        ```

###  [Day 11](#day-11)

- I'm back home after almost 7 hours of driving. [Pacquiao won again today!](http://www.espn.com/boxing/story/_/id/24100683/manny-pacquiao-ko-lucas-matthysse-7th-round-claim-wba-welterweight-title) Still working on my React skills/ here's what I'm working on today:
    * [Set State with this.setState](https://learn.freecodecamp.org/front-end-libraries/react/set-state-with-this-setstate) - On this activity, you'll understand how your app will display real time results when somthing changed on the data, like for example you what to display something on the UI after a button has been clicked. You may consult React Docs [here](https://reactjs.org/docs/state-and-lifecycle.html). Example from the activity:

        ```
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            name: 'Initial State'
            };
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            // change code below this line
            this.setState({
            name: 'React Rocks!'
            })
            // change code above this line
        }
        render() {
            return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
            );
        }
        };
        ```
### [Day 12](#day-12) 

- July 17, 2018 - I got flu today and we have a typhoon here in Manila right now. Trying to solve some ReactJS activities before slowing down and take a rest. Actually, I should say I have no activity for this day cause my flu got worse. I will continue on Day 13 :)

### [Day 13](#day-13)

- July 20, 2018 - I'm back after days of fighting to flu and work deadlines. Today, I learned binding `this` to a Class method. Worked on this challenge which is a lot of `this`

    * [Bind 'this' to a Class Method](https://learn.freecodecamp.org/front-end-libraries/react/bind-this-to-a-class-method) - The exercise is actually re-introducing me to *React Events handling*. I said re-introduction because I've done it before on some of my projects but the problem is that I didn't understand it. 
    So here is my solution to the problem.
        ```
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            itemCount: 0
            };
            // change code below this line
            this.addItem = this.addItem.bind(this);
            // change code above this line
        }
        addItem() {
            this.setState({
            itemCount: this.state.itemCount + 1
            });
        }
        render() {
            return (
            <div>
                { /* change code below this line */ }
                <button onClick={ this.addItem }>Click Me</button>
                { /* change code above this line */ }
                <h1>Current Item Count: {this.state.itemCount}</h1>
            </div>
            );
        }
        };
        ```