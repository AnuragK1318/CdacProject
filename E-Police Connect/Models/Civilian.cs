using System;
using System.Collections.Generic;

namespace E_Police_Connect.Models;

public partial class Civilian
{
    public int CivilianId { get; set; }

    public string Name { get; set; } = null!;

    public string? Email { get; set; }

    public string Phone { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Password { get; set; } = null!;

    public virtual ICollection<Complaint> Complaints { get; set; } = new List<Complaint>();
}
