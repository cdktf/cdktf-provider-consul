# `provider`

Refer to the Terraform Registory for docs: [`consul`](https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-consul.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulProvider <a name="ConsulProvider" id="@cdktf/provider-consul.provider.ConsulProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs consul}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConsulProvider(Construct Scope, string Id, ConsulProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig">ConsulProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderConfig">ConsulProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAuthJwt">ResetAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaFile">ResetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPath">ResetCaPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPem">ResetCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertFile">ResetCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertPem">ResetCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth">ResetHttpAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps">ResetInsecureHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile">ResetKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem">ResetKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.provider.ConsulProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.provider.ConsulProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.provider.ConsulProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-consul.provider.ConsulProvider.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-consul.provider.ConsulProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAuthJwt` <a name="ResetAuthJwt" id="@cdktf/provider-consul.provider.ConsulProvider.resetAuthJwt"></a>

```csharp
private void ResetAuthJwt()
```

##### `ResetCaFile` <a name="ResetCaFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaFile"></a>

```csharp
private void ResetCaFile()
```

##### `ResetCaPath` <a name="ResetCaPath" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPath"></a>

```csharp
private void ResetCaPath()
```

##### `ResetCaPem` <a name="ResetCaPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPem"></a>

```csharp
private void ResetCaPem()
```

##### `ResetCertFile` <a name="ResetCertFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertFile"></a>

```csharp
private void ResetCertFile()
```

##### `ResetCertPem` <a name="ResetCertPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertPem"></a>

```csharp
private void ResetCertPem()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-consul.provider.ConsulProvider.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetHttpAuth` <a name="ResetHttpAuth" id="@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth"></a>

```csharp
private void ResetHttpAuth()
```

##### `ResetInsecureHttps` <a name="ResetInsecureHttps" id="@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps"></a>

```csharp
private void ResetInsecureHttps()
```

##### `ResetKeyFile` <a name="ResetKeyFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile"></a>

```csharp
private void ResetKeyFile()
```

##### `ResetKeyPem` <a name="ResetKeyPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem"></a>

```csharp
private void ResetKeyPem()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.provider.ConsulProvider.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-consul.provider.ConsulProvider.resetScheme"></a>

```csharp
private void ResetScheme()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.provider.ConsulProvider.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConsulProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.provider.ConsulProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConsulProvider.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.provider.ConsulProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConsulProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConsulProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConsulProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConsulProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConsulProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConsulProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConsulProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.authJwtInput">AuthJwtInput</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput">CaFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput">CaPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput">CaPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput">CertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput">CertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput">HttpAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput">InsecureHttpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput">KeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput">KeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.authJwt">AuthJwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFile">CaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPath">CaPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPem">CaPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFile">CertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPem">CertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.header">Header</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth">HttpAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps">InsecureHttps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFile">KeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPem">KeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.provider.ConsulProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.provider.ConsulProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-consul.provider.ConsulProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AuthJwtInput`<sup>Optional</sup> <a name="AuthJwtInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.authJwtInput"></a>

```csharp
public ConsulProviderAuthJwt AuthJwtInput { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

---

##### `CaFileInput`<sup>Optional</sup> <a name="CaFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput"></a>

```csharp
public string CaFileInput { get; }
```

- *Type:* string

---

##### `CaPathInput`<sup>Optional</sup> <a name="CaPathInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput"></a>

```csharp
public string CaPathInput { get; }
```

- *Type:* string

---

##### `CaPemInput`<sup>Optional</sup> <a name="CaPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput"></a>

```csharp
public string CaPemInput { get; }
```

- *Type:* string

---

##### `CertFileInput`<sup>Optional</sup> <a name="CertFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput"></a>

```csharp
public string CertFileInput { get; }
```

- *Type:* string

---

##### `CertPemInput`<sup>Optional</sup> <a name="CertPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput"></a>

```csharp
public string CertPemInput { get; }
```

- *Type:* string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `HttpAuthInput`<sup>Optional</sup> <a name="HttpAuthInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput"></a>

```csharp
public string HttpAuthInput { get; }
```

- *Type:* string

---

##### `InsecureHttpsInput`<sup>Optional</sup> <a name="InsecureHttpsInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput"></a>

```csharp
public object InsecureHttpsInput { get; }
```

- *Type:* object

---

##### `KeyFileInput`<sup>Optional</sup> <a name="KeyFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput"></a>

```csharp
public string KeyFileInput { get; }
```

- *Type:* string

---

##### `KeyPemInput`<sup>Optional</sup> <a name="KeyPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput"></a>

```csharp
public string KeyPemInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-consul.provider.ConsulProvider.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AuthJwt`<sup>Optional</sup> <a name="AuthJwt" id="@cdktf/provider-consul.provider.ConsulProvider.property.authJwt"></a>

```csharp
public ConsulProviderAuthJwt AuthJwt { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFile"></a>

```csharp
public string CaFile { get; }
```

- *Type:* string

---

##### `CaPath`<sup>Optional</sup> <a name="CaPath" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPath"></a>

```csharp
public string CaPath { get; }
```

- *Type:* string

---

##### `CaPem`<sup>Optional</sup> <a name="CaPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPem"></a>

```csharp
public string CaPem { get; }
```

- *Type:* string

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFile"></a>

```csharp
public string CertFile { get; }
```

- *Type:* string

---

##### `CertPem`<sup>Optional</sup> <a name="CertPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPem"></a>

```csharp
public string CertPem { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-consul.provider.ConsulProvider.property.header"></a>

```csharp
public object Header { get; }
```

- *Type:* object

---

##### `HttpAuth`<sup>Optional</sup> <a name="HttpAuth" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth"></a>

```csharp
public string HttpAuth { get; }
```

- *Type:* string

---

##### `InsecureHttps`<sup>Optional</sup> <a name="InsecureHttps" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps"></a>

```csharp
public object InsecureHttps { get; }
```

- *Type:* object

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFile"></a>

```csharp
public string KeyFile { get; }
```

- *Type:* string

---

##### `KeyPem`<sup>Optional</sup> <a name="KeyPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPem"></a>

```csharp
public string KeyPem { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-consul.provider.ConsulProvider.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.provider.ConsulProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulProviderAuthJwt <a name="ConsulProviderAuthJwt" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConsulProviderAuthJwt {
    string AuthMethod,
    string BearerToken = null,
    System.Collections.Generic.IDictionary<string, string> Meta = null,
    object UseTerraformCloudWorkloadIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.authMethod">AuthMethod</a></code> | <code>string</code> | The name of the auth method to use for login. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.bearerToken">BearerToken</a></code> | <code>string</code> | The bearer token to present to the auth method during login for authentication purposes. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.meta">Meta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies arbitrary KV metadata linked to the token. Can be useful to track origins. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.useTerraformCloudWorkloadIdentity">UseTerraformCloudWorkloadIdentity</a></code> | <code>object</code> | Whether to use a [Terraform Workload Identity token](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/workload-identity-tokens). The token will be read from the `TFC_WORKLOAD_IDENTITY_TOKEN` environment variable. |

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

The name of the auth method to use for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#auth_method ConsulProvider#auth_method}

---

##### `BearerToken`<sup>Optional</sup> <a name="BearerToken" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.bearerToken"></a>

```csharp
public string BearerToken { get; set; }
```

- *Type:* string

The bearer token to present to the auth method during login for authentication purposes.

For the Kubernetes auth method this is a [Service Account Token (JWT)](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#service-account-tokens).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#bearer_token ConsulProvider#bearer_token}

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.meta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Meta { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies arbitrary KV metadata linked to the token. Can be useful to track origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#meta ConsulProvider#meta}

---

##### `UseTerraformCloudWorkloadIdentity`<sup>Optional</sup> <a name="UseTerraformCloudWorkloadIdentity" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.useTerraformCloudWorkloadIdentity"></a>

```csharp
public object UseTerraformCloudWorkloadIdentity { get; set; }
```

- *Type:* object

Whether to use a [Terraform Workload Identity token](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/workload-identity-tokens). The token will be read from the `TFC_WORKLOAD_IDENTITY_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#use_terraform_cloud_workload_identity ConsulProvider#use_terraform_cloud_workload_identity}

---

### ConsulProviderConfig <a name="ConsulProviderConfig" id="@cdktf/provider-consul.provider.ConsulProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConsulProviderConfig {
    string Address = null,
    string Alias = null,
    ConsulProviderAuthJwt AuthJwt = null,
    string CaFile = null,
    string CaPath = null,
    string CaPem = null,
    string CertFile = null,
    string CertPem = null,
    string Datacenter = null,
    object Header = null,
    string HttpAuth = null,
    object InsecureHttps = null,
    string KeyFile = null,
    string KeyPem = null,
    string Namespace = null,
    string Scheme = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.address">Address</a></code> | <code>string</code> | The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.authJwt">AuthJwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | auth_jwt block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile">CaFile</a></code> | <code>string</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath">CaPath</a></code> | <code>string</code> | A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem">CaPem</a></code> | <code>string</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile">CertFile</a></code> | <code>string</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem">CertPem</a></code> | <code>string</code> | PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | The datacenter to use. Defaults to that of the agent. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth">HttpAuth</a></code> | <code>string</code> | HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps">InsecureHttps</a></code> | <code>object</code> | Boolean value to disable SSL certificate verification; |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile">KeyFile</a></code> | <code>string</code> | A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem">KeyPem</a></code> | <code>string</code> | PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#namespace ConsulProvider#namespace}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme">Scheme</a></code> | <code>string</code> | The URL scheme of the agent to use ("http" or "https"). Defaults to "http". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.token">Token</a></code> | <code>string</code> | The ACL token to use by default when making requests to the agent. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#address ConsulProvider#address}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#alias ConsulProvider#alias}

---

##### `AuthJwt`<sup>Optional</sup> <a name="AuthJwt" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.authJwt"></a>

```csharp
public ConsulProviderAuthJwt AuthJwt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

auth_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#auth_jwt ConsulProvider#auth_jwt}

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile"></a>

```csharp
public string CaFile { get; set; }
```

- *Type:* string

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_file ConsulProvider#ca_file}

---

##### `CaPath`<sup>Optional</sup> <a name="CaPath" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath"></a>

```csharp
public string CaPath { get; set; }
```

- *Type:* string

A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections.

Can also be specified with the `CONSUL_CAPATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_path ConsulProvider#ca_path}

---

##### `CaPem`<sup>Optional</sup> <a name="CaPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem"></a>

```csharp
public string CaPem { get; set; }
```

- *Type:* string

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_pem ConsulProvider#ca_pem}

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile"></a>

```csharp
public string CertFile { get; set; }
```

- *Type:* string

A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#cert_file ConsulProvider#cert_file}

---

##### `CertPem`<sup>Optional</sup> <a name="CertPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem"></a>

```csharp
public string CertPem { get; set; }
```

- *Type:* string

PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#cert_pem ConsulProvider#cert_pem}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

The datacenter to use. Defaults to that of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#datacenter ConsulProvider#datacenter}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#header ConsulProvider#header}

---

##### `HttpAuth`<sup>Optional</sup> <a name="HttpAuth" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth"></a>

```csharp
public string HttpAuth { get; set; }
```

- *Type:* string

HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`.

This may also be specified using the `CONSUL_HTTP_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#http_auth ConsulProvider#http_auth}

---

##### `InsecureHttps`<sup>Optional</sup> <a name="InsecureHttps" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps"></a>

```csharp
public object InsecureHttps { get; set; }
```

- *Type:* object

Boolean value to disable SSL certificate verification;

setting this value to true is not recommended for production use. Only use this with scheme set to "https".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#insecure_https ConsulProvider#insecure_https}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile"></a>

```csharp
public string KeyFile { get; set; }
```

- *Type:* string

A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#key_file ConsulProvider#key_file}

---

##### `KeyPem`<sup>Optional</sup> <a name="KeyPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem"></a>

```csharp
public string KeyPem { get; set; }
```

- *Type:* string

PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#key_pem ConsulProvider#key_pem}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#namespace ConsulProvider#namespace}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

The URL scheme of the agent to use ("http" or "https"). Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#scheme ConsulProvider#scheme}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The ACL token to use by default when making requests to the agent.

Can also be specified with `CONSUL_HTTP_TOKEN` or `CONSUL_TOKEN` as an environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#token ConsulProvider#token}

---

### ConsulProviderHeader <a name="ConsulProviderHeader" id="@cdktf/provider-consul.provider.ConsulProviderHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConsulProviderHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.name">Name</a></code> | <code>string</code> | The name of the header. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.value">Value</a></code> | <code>string</code> | The value of the header. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#name ConsulProvider#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#value ConsulProvider#value}

---



