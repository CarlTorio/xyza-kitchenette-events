import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut,
  Users,
  Calendar,
  TrendingUp
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Inquiries', value: '47', icon: FileText, change: '+12%' },
    { label: 'New Inquiries', value: '8', icon: Users, change: 'Pending' },
    { label: 'This Month', value: '15', icon: Calendar, change: '+23%' },
    { label: 'Conversion Rate', value: '68%', icon: TrendingUp, change: '+5%' },
  ];

  const recentInquiries = [
    { name: 'Maria Santos', event: 'Wedding', date: 'Jan 30, 2026', status: 'New' },
    { name: 'John Reyes', event: 'Debut', date: 'Jan 29, 2026', status: 'Contacted' },
    { name: 'Ana Garcia', event: 'Birthday', date: 'Jan 28, 2026', status: 'Booked' },
    { name: 'Pedro Cruz', event: 'Corporate', date: 'Jan 27, 2026', status: 'New' },
    { name: 'Lisa Tan', event: 'Baptism', date: 'Jan 26, 2026', status: 'Contacted' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-700';
      case 'Contacted':
        return 'bg-yellow-100 text-yellow-700';
      case 'Booked':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-full bg-card shadow-lg hidden lg:block">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-serif font-bold text-primary">Admin Panel</h1>
          <p className="text-xs text-muted-foreground">XYZA IEL Kitchenette</p>
        </div>

        <nav className="p-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button 
            onClick={() => navigate('/admin/inquiries')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            <FileText size={20} />
            Inquiries
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors">
            <Settings size={20} />
            Settings
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            <LogOut size={20} />
            Back to Website
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground">Welcome Back!</h2>
          <p className="text-muted-foreground">Here's what's happening with your inquiries.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Inquiries */}
        <div className="bg-card rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground">Recent Inquiries</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Event Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentInquiries.map((inquiry, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {inquiry.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {inquiry.event}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {inquiry.date}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-border">
            <button 
              onClick={() => navigate('/admin/inquiries')}
              className="text-sm text-primary hover:underline"
            >
              View all inquiries →
            </button>
          </div>
        </div>

        {/* Note about Cloud */}
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
          <h4 className="font-semibold text-yellow-800 mb-2">Demo Mode</h4>
          <p className="text-sm text-yellow-700">
            This is a demo dashboard with sample data. To enable real inquiry management with database storage, 
            you'll need to enable Lovable Cloud for backend functionality.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
