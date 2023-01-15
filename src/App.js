import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';
import ParentComponent from './component/ParentComponent';
import ConditionRendering from './component/ConditionalRendering';
import ListRendering from './component/ListRendering';
import Stylesheet from './component/Stylesheet';
import Forms from './component/Forms';
import LifeCycleA from './component/LifeCycleA';
import FragmentDemo from './component/FragmentDemo';
import ParentComp from './component/ParentComp';
import RefDemo from './component/RefDemo';
import InputRef from './component/InputRef';
import FRParentInput from './component/FRParentInput';
import PortalDemo from './component/PortalDemo';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import ClickCountTwo from './component/ClickCountTwo';
import HoverCountTwo from './component/HoverCountTwo';
import Count from './component/Count';
import ComponentC from './component/ComponentC';
import {UserProvider} from './component/userContext'

function App() {
  return (
    <div className="App">
      <UserProvider value='hello'>
        <ComponentC />
      </UserProvider>
      {/* <Count render={(count, incrementCount) => <ClickCountTwo count={count} incrementCount={incrementCount}/>} />
      <Count render={(count, incrementCount) => <HoverCountTwo count={count} incrementCount={incrementCount}/>} /> */}
      {/* <ClickCounter name={'hello'}/>
      <HoverCounter name={'hello'}/> */}
      {/* <Hero heroName={'joker'} /> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <InputRef /> */}
      {/* <RefDemo /> */}
      {/* <ParentComp /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Forms /> */}
      {/* <Stylesheet style='primary'/> */}
      {/* <ListRendering />
      <ConditionRendering />
      <Counter/>
      <Greet name="James"><h3>Good Morning</h3></Greet>
      <Welcome name="James"/>
      <Message/>
      <ParentComponent /> */}
    </div>
  );
}

export default App;
