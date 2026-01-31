import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut,
  Search,
  Filter,
  Eye,
  X
} from 'lucide-react';

interface Inquiry {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  packageInterested: string;
  venueLocation: string;
  message: string;
  status: 'new' | 'contacted' | 'booked' | 'declined';
  createdAt: string;
}

const sampleInquiries: Inquiry[] = [
  {
    id: '1',
    referenceNumber: 'INQ-20260130-001',
    fullName: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '0917-123-4567',
    eventType: 'Wedding',
    eventDate: '2026-06-15',
    guestCount: '100',
    packageInterested: 'Intimate / Civil Wed',
    venueLocation: 'Los Banos, Laguna',
    message: 'Looking for a complete wedding package with live band.',
    status: 'new',
    createdAt: '2026-01-30',
  },
  {
    id: '2',
    referenceNumber: 'INQ-20260129-002',
    fullName: 'John Reyes',
    email: 'john.reyes@email.com',
    phone: '0918-234-5678',
    eventType: 'Debut',
    eventDate: '2026-05-20',
    guestCount: '70',
    packageInterested: 'Debut Celebration',
    venueLocation: 'Bay, Laguna',
    message: 'Inquiring about debut package for my daughter.',
    status: 'contacted',
    createdAt: '2026-01-29',
  },
  {
    id: '3',
    referenceNumber: 'INQ-20260128-003',
    fullName: 'Ana Garcia',
    email: 'ana.garcia@email.com',
    phone: '0919-345-6789',
    eventType: 'Kids Birthday',
    eventDate: '2026-04-10',
    guestCount: '50',
    packageInterested: 'Kids Birthday',
    venueLocation: 'Pansol, Laguna',
    message: 'Birthday party for my 7 year old son.',
    status: 'booked',
    createdAt: '2026-01-28',
  },
  {
    id: '4',
    referenceNumber: 'INQ-20260127-004',
    fullName: 'Pedro Cruz',
    email: 'pedro.cruz@company.com',
    phone: '0920-456-7890',
    eventType: 'Corporate',
    eventDate: '2026-03-25',
    guestCount: '100+',
    packageInterested: 'Custom/Not Sure',
    venueLocation: 'Los Banos, Laguna',
    message: 'Company year-end party with around 150 employees.',
    status: 'new',
    createdAt: '2026-01-27',
  },
  {
    id: '5',
    referenceNumber: 'INQ-20260126-005',
    fullName: 'Lisa Tan',
    email: 'lisa.tan@email.com',
    phone: '0921-567-8901',
    eventType: 'Baptism/1st Birthday',
    eventDate: '2026-04-05',
    guestCount: '50',
    packageInterested: 'Baptism / 1st Birthday',
    venueLocation: 'Bay, Laguna',
    message: 'Combined baptism and first birthday celebration.',
    status: 'contacted',
    createdAt: '2026-01-26',
  },
];

const AdminInquiries = () => {
  const navigate = useNavigate();
  const [inquiries] = useState<Inquiry[]>(sampleInquiries);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-700';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-700';
      case 'booked':
        return 'bg-green-100 text-green-700';
      case 'declined':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || inquiry.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-full bg-card shadow-lg hidden lg:block">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-serif font-bold text-primary">Admin Panel</h1>
          <p className="text-xs text-muted-foreground">XYZA IEL Kitchenette</p>
        </div>

        <nav className="p-4 space-y-2">
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground">
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
          <h2 className="text-2xl font-serif font-bold text-foreground">Inquiries</h2>
          <p className="text-muted-foreground">Manage and track all customer inquiries.</p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl p-4 shadow-md mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search by name, email, or reference..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-pill pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-muted-foreground" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input-pill w-40"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="booked">Booked</option>
              <option value="declined">Declined</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Reference
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase hidden md:table-cell">
                    Event
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase hidden lg:table-cell">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-4 text-sm font-mono text-muted-foreground">
                      {inquiry.referenceNumber}
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm font-medium text-foreground">{inquiry.fullName}</p>
                      <p className="text-xs text-muted-foreground">{inquiry.email}</p>
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground hidden md:table-cell">
                      {inquiry.eventType}
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground hidden lg:table-cell">
                      {inquiry.eventDate}
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded capitalize ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => setSelectedInquiry(inquiry)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <Eye size={18} className="text-primary" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* View Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Inquiry Details
                </h3>
                <p className="text-sm text-muted-foreground">{selectedInquiry.referenceNumber}</p>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Full Name</p>
                    <p className="text-sm font-medium">{selectedInquiry.fullName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">{selectedInquiry.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">{selectedInquiry.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <span className={`px-2 py-1 text-xs font-medium rounded capitalize ${getStatusColor(selectedInquiry.status)}`}>
                      {selectedInquiry.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Info */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Event Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Event Type</p>
                    <p className="text-sm font-medium">{selectedInquiry.eventType}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Event Date</p>
                    <p className="text-sm font-medium">{selectedInquiry.eventDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Guest Count</p>
                    <p className="text-sm font-medium">{selectedInquiry.guestCount} Pax</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Package</p>
                    <p className="text-sm font-medium">{selectedInquiry.packageInterested}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-xs text-muted-foreground">Venue Location</p>
                    <p className="text-sm font-medium">{selectedInquiry.venueLocation}</p>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Message</h4>
                <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                  {selectedInquiry.message}
                </p>
              </div>

              {/* Update Status */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Update Status</h4>
                <select className="input-pill">
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="booked">Booked</option>
                  <option value="declined">Declined</option>
                </select>
              </div>
            </div>

            <div className="p-6 border-t border-border flex justify-end gap-4">
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-6 py-2 border border-border rounded-full hover:bg-muted transition-colors"
              >
                Close
              </button>
              <button className="btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminInquiries;
