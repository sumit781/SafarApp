import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlightsSearchList, Home } from "../container";
import LinearGradiantWrapper from "../components/linearGradiantWrapper";
const {Navigator,Screen}=createNativeStackNavigator()

const Navigation=()=>{
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Home" component={Home}/>
                <Screen name="FlightsSearch" component={LinearGradiantWrapper(FlightsSearchList)}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation;