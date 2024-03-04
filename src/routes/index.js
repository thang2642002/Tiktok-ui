//Layout
import { HeaderOnly } from '~/componment/Layout';

import Home from '~/pages/Home';
import Follwwing from '~/pages/Follwwing';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follwwing', component: Follwwing },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoues = [];
export { publicRoutes, privateRoues };
