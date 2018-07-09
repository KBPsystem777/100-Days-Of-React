# Koleen BP's 30-Days-Of-React journey
*this.myCommits-in-Learning-React*

I have previously pushed bunch of React codes to our start-up repo only to found out that I am missing something. I'm missing the true fundamentals of React, which is the most important in learning it. So in order to refresh my memory and keep things running, I paused, reflect and trying to grasp React one more time but this time, in an elegant way > 

---

## Coding Logs

### Day 1

- Following tutorials from [30 Days Of React](https://github.com/fullstackreact/30-days-of-react) and following the exercises for Notification panel. Had a hard time in getting the CSS for the view but I changed my mind to use [w3-css](https://github.com/fullstackreact/30-days-of-react) stylesheet.

- I found the instructions for the `<Timeline />` component is too large so I broke it up into a 3 different *React Component*

- Had a clear understanding of basic React `props` and implemented it on the components. As you can see on the following commits:
    * [{this.props.time}](https://github.com/KBPsystem777/30-Days-Of-React/commit/1bcd3247e9d26b525945d733c81ccc8a73948043#diff-14b1e33d5bf5649597cdc0e4f684daddR17)

    * [Output](https://github.com/KBPsystem777/30-Days-Of-React/commit/1bcd3247e9d26b525945d733c81ccc8a73948043#diff-14b1e33d5bf5649597cdc0e4f684daddR48)


### Day 2

- Still studying how to display data in React using the JSON via props.

- I did this method using the `map()` function in JavaScript. Challenge right now is the manipulation of array objects - I need to dig hard on `objects`


### Day 3

- Just watched some YouTub videos today discussing `props` in order to have deeper understanding of it. Here are my personal recommendations:

    * [Passing Data with Props](https://www.youtube.com/watch?v=GIU8ekYndKw&index=2&list=PLdVadnqHPMJEY8Dz4DdHAqrounEZJ0x6M&t=0s)

    * [React Props](https://www.youtube.com/watch?v=i1PLMgtG5Qo&index=4&list=PLdVadnqHPMJEY8Dz4DdHAqrounEZJ0x6M&t=2s)

### Day 4

- After days of nightshift and overtime at work, this is my updates:

    * Currently found a new book in GitBook: https://legacy.gitbook.com/book/chrisnoring/react/details

     * Im gonna give [FreeCodeCamp's React Curriculum](https://learn.freecodecamp.org/front-end-libraries/react) a shot today.

    * I am actually overwhelmed by the facts and plenty of resources about React, either online content: videos/ebook/PDFs/blogs and so on. My advise is that stick to your current resource and dont let any material(s) distract your goals. It happens to me all the time.

### Day 5

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

### Day 6

- Doing FreeCodeCamp [#ReactJS](https://twitter.com/search?q=%23reactjs&src=typd) exercises at 6:00 AM after work.

- Sounds clear to me now what's the difference between `props` and `states`. We use `props` for passing absolute data/values in the components. When I say absolute I mean fixed values that you think will not change throughout the lifecycle. In contrary to that, we have `states`. States handles all the changing values in the components.

- Watching and still analyzing these ReactJS videos:

    * [Events in React](https://www.youtube.com/watch?v=OcM__8q6p4c)

    * [State of Components](https://www.youtube.com/watch?v=e5n9j9n83OM)

### Day 7

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
