using System;
using System.Collections.Generic;

namespace E_Police_Connect.Models;

public partial class Criminal
{
    public int CriminalId { get; set; }

    public string Name { get; set; } = null!;

    public int? Age { get; set; }

    public string Gender { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string CrimeCommitted { get; set; } = null!;

    public DateOnly ArrestDate { get; set; }

    public int OfficerId { get; set; }

    public virtual Officer Officer { get; set; } = null!;

    public virtual ICollection<PrisonRecord> PrisonRecords { get; set; } = new List<PrisonRecord>();
}
