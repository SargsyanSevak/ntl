import React, { useState } from 'react';
import { testload } from '../../data/testload';

interface Freight {
  id: string;
  origin: string;
  destination: string;
}

const ChangeLoads: React.FC = () => {
  const [freights, setFreights] = useState<Freight[]>([
    { id: '1', origin: 'Origin 1', destination: 'Destination 1' },
    { id: '2', origin: 'Origin 2', destination: 'Destination 2' },
    { id: '3', origin: 'Origin 3', destination: 'Destination 3' },
  ]);

  const [editingFreightId, setEditingFreightId] = useState<string | null>(null);
  const [editingOrigin, setEditingOrigin] = useState('');
  const [editingDestination, setEditingDestination] = useState('');

  const handleEditFreight = (freight: Freight) => {
    setEditingFreightId(freight.id);
    setEditingOrigin(freight.origin);
    setEditingDestination(freight.destination);
  };

  const handleSaveFreight = () => {
    if (!editingFreightId) return;

    // Update the freight in the local state with the saved changes
    const updatedFreights = freights.map((f) =>
      f.id === editingFreightId
        ? { ...f, origin: editingOrigin, destination: editingDestination }
        : f
    );
    setFreights(updatedFreights);
    setEditingFreightId(null); // Reset editing state
    setEditingOrigin('');
    setEditingDestination('');
  };

  const handleCancelEditing = () => {
    setEditingFreightId(null);
    setEditingOrigin('');
    setEditingDestination('');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {freights.map((freight) => (
            <React.Fragment key={freight.id}>
              <tr>
                <td>{freight.id}</td>
                <td>{freight.origin}</td>
                <td>{freight.destination}</td>
                <td>
                  {editingFreightId === freight.id ? (
                    <>
                      <button onClick={handleSaveFreight}>Save</button>
                      <button onClick={handleCancelEditing}>Cancel</button>
                    </>
                  ) : (
                    <button onClick={() => handleEditFreight(freight)}>
                      Edit
                    </button>
                  )}
                </td>
              </tr>
              {editingFreightId === freight.id && (
                <tr>
                  <td colSpan={4}>
                    <div>
                      <input
                        type="text"
                        value={editingOrigin}
                        onChange={(e) => setEditingOrigin(e.target.value)}
                      />
                      <input
                        type="text"
                        value={editingDestination}
                        onChange={(e) =>
                          setEditingDestination(e.target.value)
                        }
                      />
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChangeLoads;
