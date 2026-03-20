interface User {
    id: number;
    name: string;
    isActive: boolean;  
    role?: string;
}

export const UserList = ()=>{
    const users: User[] = [
        { id: 1, name: 'AB', isActive: true, role: 'Admin' },
        { id: 2, name: 'Harry', isActive: false },
        { id: 3, name: 'Katia', isActive: true, role: 'Designer' },
    ];
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4" >Lista de Usuarios</h2>

            {users.map((user) =>(
                <div key={user.id} className="border p-4 mb-2 rounded">
                <p>Nombre: {user.name}</p>
                <p>Estado: {user.isActive ? "Activo" : "Inactivo"}</p>
                {user.role && <p>Rol: {user.role}</p>}
            </div>
            ))}
        </div>

        );
};