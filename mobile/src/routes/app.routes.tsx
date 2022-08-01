import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import { ListTask } from "../pages/ListTask";
import { Project } from "../pages/Project";
import { Register } from "../pages/Register";
import { Task } from "../pages/Task";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="home" component={Home} />
                <Screen name="register" component={Register} />
                <Screen name="list" component={ListTask} /> 
                <Screen name="project" component={Project} /> 
                <Screen name="task" component={Task} />
        </Navigator>
    )
}
