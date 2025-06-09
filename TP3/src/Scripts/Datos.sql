-- Datos de prueba para la tabla Pacientes
INSERT INTO Pacientes (dni, nombre, apellido, email, password, createdAt, updatedAt) VALUES
('12345678', 'Luciano', 'Guardese', 'lucho.guardese@email.com', '123456', datetime('now'), datetime('now')),
('87654321', 'Belen', 'Burgos', 'belen.burgos@email.com', '123456', datetime('now'), datetime('now')),
('11223344', 'Ian', 'Ibañez', 'carlos.rodriguez@email.com', '123456', datetime('now'), datetime('now')),
('44332211', 'Noe', 'Humbert', 'Noe.humbert@email.com', '123456', datetime('now'), datetime('now')),
('55667788', 'Ivan', 'Guardese', 'ivan.guardese@email.com', '123456', datetime('now'), datetime('now'));

-- Datos de prueba para la tabla Turnos
INSERT INTO Turnos (fecha, hora, pacienteId, estado, createdAt, updatedAt) VALUES
('2024-12-10', '09:00', 1, 'reservado', datetime('now'), datetime('now')),
('2024-12-10', '10:30', 2, 'reservado', datetime('now'), datetime('now')),
('2024-12-11', '14:00', 1, 'completado', datetime('now'), datetime('now')),
('2024-12-11', '15:30', 3, 'reservado', datetime('now'), datetime('now')),
('2024-12-12', '08:30', 4, 'cancelado', datetime('now'), datetime('now')),
('2024-12-12', '11:00', 2, 'reservado', datetime('now'), datetime('now')),
('2024-12-13', '16:00', 5, 'reservado', datetime('now'), datetime('now')),
('2024-12-14', '09:30', 3, 'completado', datetime('now'), datetime('now')),
('2024-12-15', '13:00', 1, 'reservado', datetime('now'), datetime('now'));