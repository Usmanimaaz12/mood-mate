import Dashboard from '@/components/Dashboard';
import Main from '@/components/Main';

export const metadata = {
    title: "mood-mate ⋅ Dashboard",
    description: "Track your daily mood every day of the year.", 
  };

const DashboardPage = () => {
    return (
        <Main>
            <Dashboard />
        </Main>
    )
}

export default DashboardPage
