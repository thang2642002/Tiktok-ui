import Header from '~/componment/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayput({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayput;
