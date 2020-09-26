import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList112078Navigator from '../features/ArticleList112078/navigator';
import ArticleList112061Navigator from '../features/ArticleList112061/navigator';
import ArticleList112060Navigator from '../features/ArticleList112060/navigator';
import ArticleList112059Navigator from '../features/ArticleList112059/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList112078: { screen: ArticleList112078Navigator },
ArticleList112061: { screen: ArticleList112061Navigator },
ArticleList112060: { screen: ArticleList112060Navigator },
ArticleList112059: { screen: ArticleList112059Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
